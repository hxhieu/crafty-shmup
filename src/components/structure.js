import '@/components/tween-ext'
import { Events } from '@/constants'

// Local vars
const maxArmour = new WeakMap()
const currentArmour = new WeakMap()
const maxShield = new WeakMap()
const currentShield = new WeakMap()
const deadEffect = new WeakMap()

// Component definition

Crafty.c('Structure', {
  required: 'TweenExt, Color',
  takeDamage,
  setStructure,
  getArmour: function () {
    return {
      current: currentArmour.get(this),
      max: maxArmour.get(this)
    }
  },
  getShield: function () {
    return {
      current: currentShield.get(this),
      max: maxShield.get(this)
    }
  }
})

// Helpers

function setStructure (armour, shield, effect) {
  maxArmour.set(this, armour || 0)
  currentArmour.set(this, armour || 0)
  maxShield.set(this, shield || 0)
  currentShield.set(this, shield || 0)
  deadEffect.set(this, effect)
  return this
}

async function takeDamage (amount) {
  let shield = currentShield.get(this)
  shield -= amount
  currentShield.set(this, shield)

  // After shield mitigation
  if (shield < 0) {
    let armour = currentArmour.get(this)
    armour += shield
    currentShield.set(this, 0)
    if (armour <= 0) {
      // Mark as death
      this.removeComponent(this.collisionProfile)

      if (this.has('DeathSequence')) {
        await this.activateDeathSequence()
      }

      const { explode, sound, volume } = deadEffect.get(this)
      if (explode) {
        const { x, y } = this
        Crafty.e(explode).attr({ x, y })
      }
      if (sound) {
        Crafty.audio.play(sound, 1, volume || 1)
      }

      // Neccessary post destroy events
      this.trigger(Events.STRUCTURE_DESTROY)

      this.destroy()
      return this
    }

    currentArmour.set(this, armour)
    return this
  }

  // If we got this far then we survived!
  this.tweenFlash()
  this.trigger(Events.STRUCTURE_TAKE_DAMAGE, amount)

  return this
}
