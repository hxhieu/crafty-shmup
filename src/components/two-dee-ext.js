let forward = new Crafty.math.Vector2D(0, -1)

// Component definition

Crafty.c('2DExt', {
  required: '2D',

  init: function () {
    // Centre pivot
    this.origin('center')
  },

  lookDirection: function (target) {
    target = target.normalize()
    this.rotation = this._forward.angleBetween(target).toDeg()
    forward = target

    return this
  },

  getForward: function () {
    return forward
  }
})
