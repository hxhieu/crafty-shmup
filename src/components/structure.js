import '@/components/tween-ext'
import '@/components/sound-clip'
import { Events } from '@/constants'

// Local vars
const maxArmour = new WeakMap()
const currentArmour = new WeakMap()
const maxShield = new WeakMap()
const currentShield = new WeakMap()
const deadEffect = new WeakMap()
const isDestroying = new WeakMap()

// Component definition

Crafty.c('Structure', {
  required: 'TweenExt, Color, SoundClip',

  events: {
    [Events.TRIGGER_DESTROY]: triggerDestroy
  },

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
  },
  getStructurePoints: function () {
    const { current: shield } = this.getShield()
    const { current: armour } = this.getArmour()
    return shield + armour
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
  if (isDestroying.get(this)) {
    return
  }

  this.tweenFlash()

  let shield = currentShield.get(this)
  shield -= amount
  currentShield.set(this, shield)

  // After shield mitigation
  if (shield < 0) {
    let armour = currentArmour.get(this)
    armour += shield
    currentShield.set(this, 0)
    if (armour <= 0) {
      isDestroying.set(this, true)
      await triggerDestroy.call(this)
      return this
    }

    currentArmour.set(this, armour)
  }

  // If we got this far then we survived!
  this.trigger(Events.STRUCTURE_HIT, amount)

  return this
}

async function triggerDestroy () {
  // Mark as death
  this.trigger(Events.STRUCTURE_DESTROYED)
  this.removeComponent(this.collisionProfile)

  if (this.has('DeathSequence')) {
    await this.activateDeathSequence()
  }

  const effects = deadEffect.get(this)
  const { explode } = effects
  if (explode) {
    const { ox, oy } = this
    Crafty.e(explode).attr({ ox, oy })
  }
  this.playSoundClip(effects)

  this.destroy()
}
