import './move-to'

Crafty.c('MoveToMouse', {
  required: 'MoveTo, Mouse, Collider',

  _enabled: true,
  _followSpeed: 0,

  _mouseMove: function (e) {
    if (!this._enabled) return
    var centre = this.centreOffset()
    this.moveTo(e.x - centre.x, e.y - centre.y, this._followSpeed)
  },

  init: function () {
    Crafty.addEvent(this, Crafty.stage.elem, 'mousemove', this._mouseMove)
  },

  moveToMouse: function (speed) {
    this._followSpeed = speed
    this._enabled = speed > 0
    return this
  }
})
