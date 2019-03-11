import '@/components/four-way-bounded'

import { keypad, screenSize } from '@/device'
import '@/gui/powerup-panel'
import { Events, Loots, PlayerEquipments } from '@/constants'
import { createPlayerMultiple } from './multiple'

// Local vars
const weapons = new WeakMap()
const BASE_SPEED = 40

const weaponTemplate = new WeakMap()
const playerSprie = new WeakMap()
const multiples = new WeakMap()

// Component definition

Crafty.c('PlayerController', {
  required: 'FourwayBounded',

  events: {
    KeyDown,
    KeyUp,
    Remove: function () {
      stopFire.call(this)
      multiples.get(this)
        .forEach(x => x.destroy())
    },
    [Events.LOOT_ACQUIRED]: function (loot) {
      if (loot.id === Loots.POWER_UP) {
        this.powerUpPanel.nextSlot()
      }
    },
    [Events.PLAYER_SPRITE_SET]: function (sprite) {
      playerSprie.set(this, sprite)
    }
  },

  init: function () {
    // const { x, y } = this
    this.powerUpPanel = Crafty.e('PowerUpPanel')
    this.fourwayBounded(BASE_SPEED, screenSize)
    multiples.set(this, [])
  },

  useWeapon: function (template) {
    weaponTemplate.set(this, template)
    // Attach
    const { ox, oy } = this
    const weapon = template().attr({ ox, oy })
    this.attach(weapon)
    const equips = weapons.get(this) || []
    equips[PlayerEquipments.WEAPON] = weapon
    weapons.set(this, equips)

    // Demo
    // weapon.setWeaponLevelUp()
    // weapon.setWeaponLevelUp()
    // weapon.setWeaponLevelUp()
    // weapon.startFire()
    // multipleUp.call(this)
    // this.fourwayBounded(BASE_SPEED * 10, screenSize)
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
  weapons.get(this)
    .filter(x => x.has('Weapon'))
    .forEach(x => x.stopFire())

  multiples.get(this)
    .forEach(x => x.stopFire())
}

function startFire () {
  weapons.get(this)
    .filter(x => x.has('Weapon'))
    .forEach(x => x.startFire())

  multiples.get(this)
    .forEach(x => x.startFire())
}

function powerUp () {
  const { activeIndex } = this.powerUpPanel
  const canPowerUp = this.powerUpPanel.powerUp()
  if (!canPowerUp) {
    return
  }
  switch (activeIndex) {
    case PlayerEquipments.SPEED:
    {
      speedUp.call(this)
      break
    }
    case PlayerEquipments.MISSILE:
    case PlayerEquipments.WEAPON:
    {
      weaponUp.call(this, activeIndex)
      break
    }
    case PlayerEquipments.MULTIPLE:
    {
      multipleUp.call(this)
      break
    }
    case PlayerEquipments.SHIELD:
    {
      break
    }
  }
}

function speedUp () {
  const currentSpeedLevel = this.powerUpPanel.getSlotLevel(PlayerEquipments.SPEED)

  this.fourwayBounded(BASE_SPEED * (currentSpeedLevel + 1), screenSize)
}

function weaponUp (activeIndex) {
  stopFire.call(this)
  weapons.get(this)[activeIndex].setWeaponLevelUp()
  multiples.get(this)
    .forEach(x => x.levelUp())
}

function multipleUp () {
  stopFire.call(this)
  const mul = multiples.get(this)
  const multiple = createPlayerMultiple(playerSprie.get(this), weaponTemplate.get(this))

  // Starting pos and head
  if (mul.length === 0) {
    const { x, y } = this
    multiple.attr({ x, y }).setSnakeFollowHead(this)
  } else {
    const lastMul = mul[mul.length - 1]
    const { x, y } = lastMul
    multiple.attr({ x, y }).setSnakeFollowHead(lastMul)
  }

  // Levels catch up
  const currentWeapLvl = weapons.get(this)[PlayerEquipments.WEAPON].getLevel()
  for (let i = 1; i < currentWeapLvl; i++) {
    multiple.levelUp()
  }

  mul.push(multiple)
  multiples.set(this, mul)
}
