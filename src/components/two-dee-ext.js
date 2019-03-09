import { Events } from '@/constants'

const forward = new WeakMap()

// Component definition

Crafty.c('2DExt', {
  required: '2D',

  init: function () {
    forward.set(this, new Crafty.math.Vector2D(0, -1))
  },

  lookDirection: function (target) {
    if (!target) {
      return
    }
    target = target.normalize()
    this.rotation = forward.get(this).angleBetween(target).toDeg()
    forward.set(this, target)
    this.trigger(Events.DIRECTION_CHANGED)

    return this
  },

  lookRotation: function (deg) {
    this.lookDirection(forward.rotateDeg(deg))
  },

  getForward: function () {
    return forward.get(this)
  }
})
