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
const powerLevel = new WeakMap()

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
    this.powerUpPanel = Crafty.e('PowerUpPanel')
    this.fourwayBounded(BASE_SPEED, screenSize)
    multiples.set(this, [])
    powerLevel.set(this, 1)
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
    // weapon.setWeaponLevelUp()
    // multipleUp.call(this)
    // multipleUp.call(this)
    // weapon.startFire()
    // this.fourwayBounded(BASE_SPEED * 2, screenSize)
    return this
  },

  getPowerLevel: function () {
    return powerLevel.get(this)
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
  const currentPower = powerLevel.get(this)
  switch (activeIndex) {
    case PlayerEquipments.SPEED:
    {
      speedUp.call(this)
      powerLevel.set(this, currentPower + 1)
      break
    }
    // case PlayerEquipments.MISSILE:
    case PlayerEquipments.WEAPON:
    {
      weaponUp.call(this, activeIndex)
      powerLevel.set(this, currentPower + 3)
      break
    }
    case PlayerEquipments.MULTIPLE:
    {
      multipleUp.call(this)
      powerLevel.set(this, currentPower + 4)
      break
    }
    case PlayerEquipments.SHIELD:
    {
      shieldUp.call(this)
      powerLevel.set(this, currentPower + 5)
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

function shieldUp () {
  const { ox, oy } = this
  const { current: currentShield } = this.getShield()
  if (currentShield <= 0) {
    const shield = Crafty.e('Sprite_PlayerForceField').attr({ ox, oy })
    this.attach(shield)
    this.bind(Events.STRUCTURE_SHIELD_HIT, function () {
      const { current: currentShield } = this.getShield()
      if (currentShield > 0) {
        shield.safeAnimate('flash')
      } else {
        shield.safeAnimate('off')
      }
      this.powerUpPanel.setSlotLevelDown(PlayerEquipments.SHIELD)
    })

    if (currentShield === 0) {
      shield.safeAnimate('on')
    }
  }
  this.setShieldPoints(currentShield + 1)
}
