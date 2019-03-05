import { keypad } from '@/device'
import '@/gui/powerup-panel'
import { Events, Loots } from '@/constants'
import { createPlayerMultiple } from './multiple'

// Local vars
const equipments = new WeakMap()
const equipIndex = {
  SPEED: 0,
  MISSILE: 1,
  WEAPON: 2,
  MULTIPLE: 3,
  SHIELD: 4
}

const weaponTemplate = new WeakMap()
const playerSprie = new WeakMap()
const multiples = new WeakMap()

// Component definition

Crafty.c('PlayerController', {

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
    },
    [Events.PLAYER_SPRITE_SET]: function (sprite) {
      playerSprie.set(this, sprite)
    }
  },

  init: function () {
    // const { x, y } = this
    this.powerUpPanel = Crafty.e('PowerUpPanel')
    multiples.set(this, [])
  },

  useWeapon: function (template) {
    weaponTemplate.set(this, template)
    // Attach
    const { ox, oy } = this
    const weapon = template().attr({ ox, oy })
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

  multiples.get(this)
    .forEach(x => x.stopFire())
}

function startFire () {
  equipments.get(this)
    .filter(x => x.has('Weapon'))
    .forEach(x => x.startFire())

  multiples.get(this)
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
      multiples.get(this)
        .forEach(x => x.levelUp())
      break
    }
    case equipIndex.MULTIPLE:
    {
      spawnMultiple.call(this)
      break
    }
    case equipIndex.SHIELD:
    {
      break
    }
  }
  this.powerUpPanel.powerUp()
}

function spawnMultiple () {
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
  const currentWeapLvl = equipments.get(this)[equipIndex.WEAPON].getLevel()
  for (let i = 1; i < currentWeapLvl; i++) {
    multiple.levelUp()
  }

  mul.push(multiple)
  multiples.set(this, mul)
}
