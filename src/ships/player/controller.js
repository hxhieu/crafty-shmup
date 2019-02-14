import { keypad } from '@/device'
import { Events } from '@/constants'

// Local vars
const currentWeapon = new WeakMap()

// Component definition

Crafty.c('PlayerController', {
  // required: 'XXX',

  events: {
    KeyDown,
    KeyUp,
    Remove: function () {
      currentWeapon.get(this).stopFire()
    },
    [Events.LOOT_ACQUIRED]: function () {
      currentWeapon.get(this).levelUp()
    }
  },
  setWeapon: function (weapon) {
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
