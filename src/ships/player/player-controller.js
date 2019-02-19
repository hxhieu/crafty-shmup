import { keypad } from '@/device'
import '@/gui/powerup-panel'
import { Events, Loots } from '@/constants'

// Local vars
const currentWeapon = new WeakMap()

// Component definition

Crafty.c('PlayerController', {
  // required: 'PowerUpPanel',

  events: {
    KeyDown,
    KeyUp,
    Remove: function () {
      currentWeapon.get(this).stopFire()
    },
    [Events.LOOT_ACQUIRED]: function (loot) {
      if (loot.id === Loots.POWER_UP) {
        this.powerUpPanel.nextSlot()
      }
    }
  },

  init: function () {
    this.powerUpPanel = Crafty.e('PowerUpPanel')
  },

  useWeapon: function (weapon) {
    // Attach
    const { x, y } = this.getCentrePos()
    weapon.attr({ x, y })
    this.attach(weapon)
    currentWeapon.set(this, weapon)
    return this
  }
})

// Helpers

function KeyDown (e) {
  const weapon = currentWeapon.get(this)
  switch (e.key) {
    case keypad.Y: {
      weapon.stopFire()
      weapon.startFire()
      break
    }
    case keypad.X: {
      weapon.stopFire()
      weapon.startFire()
      break
    }
    case keypad.A:
    case keypad.B: {
      weapon.setWeaponLevelUp()
      this.powerUpPanel.powerUp()
      break
    }
  }
}

function KeyUp (e) {
  const weapon = currentWeapon.get(this)
  switch (e.key) {
    case keypad.Y: {
      weapon.stopFire()
      break
    }
    case keypad.X: {
      weapon.stopFire()
      break
    }
  }
}
