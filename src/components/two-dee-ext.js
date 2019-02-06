Crafty.c('2DExt', {
  required: '2D',

  _forward: new Crafty.math.Vector2D(0, -1),

  init: function () {
    // Centre pivot
    this.origin('center')
  },

  lookDirection: function (target) {
    target = target.normalize()
    this.rotation = this._forward.angleBetween(target).toDeg()
    this._forward = target

    return this
  },

  getForward: function () {
    return this._forward
  }
})
