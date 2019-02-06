import './move-to'

// Local vars

let enabled = true
let followSpeed = 0

// Component definition

Crafty.c('MoveToMouse', {
  required: 'MoveTo, Mouse, Collider',

  init: function () {
    Crafty.addEvent(this, Crafty.stage.elem, 'mousemove', mouseMove)
  },

  moveToMouse: function (speed) {
    followSpeed = speed
    enabled = speed > 0
    return this
  }
})

// Helpers

function mouseMove (e) {
  if (!enabled) return
  var centre = this.getCentre()
  this.moveTo(e.x - centre.x, e.y - centre.y, followSpeed)
}
