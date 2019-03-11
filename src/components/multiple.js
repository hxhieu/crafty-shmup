import '@/components/velocity'
import '@/components/snake-follow'

import { CollisionProfiles } from '@/constants'

// Local vars

const weapon = new WeakMap()

// Component definition

Crafty.c('Multiple', {
  required: 'Velocity, SnakeFollow',

  init: function () {
    this.alpha = 0.5
    // Manually set the collision here
    this.collisionProfile = CollisionProfiles.PLAYER
  },

  useWeapon: function (template) {
    // Attach
    const { ox, oy } = this
    const weap = template().attr({ ox, oy })
    this.attach(weap)
    weapon.set(this, weap)
    return this
  },

  levelUp: function () {
    weapon.get(this).setWeaponLevelUp()
    return this
  },

  startFire: function () {
    weapon.get(this).startFire()
  },

  stopFire: function () {
    weapon.get(this).stopFire()
  }
})
