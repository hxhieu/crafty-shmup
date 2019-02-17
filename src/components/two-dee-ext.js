const forward = new WeakMap()

// Component definition

Crafty.c('2DExt', {
  required: '2D',

  events: {
    NewEntity: function () {
      this.origin('center')
    }
  },

  init: function () {
    forward.set(this, new Crafty.math.Vector2D(0, -1))
  },

  lookDirection: function (target) {
    target = target.normalize()
    this.rotation = forward.get(this).angleBetween(target).toDeg()
    forward.set(this, target)

    return this
  },

  getForward: function () {
    return forward.get(this)
  }
})
