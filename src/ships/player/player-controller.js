import { keypad } from '@/device'
import '@/gui/powerup-panel'
import { Events, Loots } from '@/constants'

// Local vars
const equipments = new WeakMap()
const equipIndex = {
  SPEED: 0,
  MISSILE: 1,
  WEAPON: 2,
  MULTIPLE: 3,
  SHIELD: 4
}

// Component definition

Crafty.c('PlayerController', {
  // required: 'PowerUpPanel',

  events: {
    KeyDown,
    KeyUp,
    Remove: function () {
      stopFire.call(this)
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
    const equips = equipments.get(this) || []
    equips[equipIndex.WEAPON] = weapon
    equipments.set(this, equips)
    return this
  }
})

// Helpers

function KeyDown (e) {
  switch (e.key) {
    case keypad.Y: {
      stopFire.call(this)
      startFire.call(this)
      break
    }
    case keypad.X: {
      stopFire.call(this)
      startFire.call(this)
      break
    }
    case keypad.A:
    case keypad.B: {
      powerUp.call(this)
      break
    }
  }
}

function KeyUp (e) {
  switch (e.key) {
    case keypad.Y: {
      stopFire.call(this)
      break
    }
    case keypad.X: {
      stopFire.call(this)
      break
    }
  }
}

function stopFire () {
  equipments.get(this)
    .filter(x => x.has('Weapon'))
    .forEach(x => x.stopFire())
}

function startFire () {
  equipments.get(this)
    .filter(x => x.has('Weapon'))
    .forEach(x => x.startFire())
}

function powerUp () {
  const { activeIndex } = this.powerUpPanel
  switch (activeIndex) {
    case equipIndex.SPEED:
    {
      break
    }
    case equipIndex.MISSILE:
    {
      break
    }
    case equipIndex.WEAPON:
    {
      stopFire.call(this)
      equipments.get(this)[activeIndex].setWeaponLevelUp()
      break
    }
    case equipIndex.MULTIPLE:
    {
      break
    }
    case equipIndex.SHIELD:
    {
      break
    }
  }
  this.powerUpPanel.powerUp()
}
