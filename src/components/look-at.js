// Local vars

// Component definition

Crafty.c('LookAt', {
  required: '2DExt',
  getTarget: null,
  resetDirection: null,

  events: {
    ExitFrame
  },

  setLookAtTarget: function (getTarget, resetDirection) {
    this.resetDirection = resetDirection
    this.getTarget = getTarget
    return this
  }
})

// Helpers

function ExitFrame () {
  const target = this.getTarget && this.getTarget()
  if (!target) {
    this.lookDirection(this.resetDirection)
  } else {
    const { ox: x1, oy: y1 } = this
    const { ox: x2, oy: y2 } = target
    const direction = new Crafty.math.Vector2D(x2 - x1, y2 - y1).normalize()
    this.lookDirection(direction)
  }
}
