// Local vars

const lastPos = new WeakMap()
const velocity = new WeakMap()

// Component definition

Crafty.c('Velocity', {
  required: '2DExt',

  events: {
    EnterFrame
  },

  init: function () {
    const { x, y } = this
    lastPos.set(this, { x, y })
  },

  getVelocity: function () {
    return velocity.get(this) || new Crafty.math.Vector2D()
  },

  isMoving: function () {
    return this.getVelocity().magnitude() > 0
  }
})

// Helpers

function EnterFrame () {
  const { x, y } = this
  const { x: lastX, y: lastY } = lastPos.get(this)
  velocity.set(this, new Crafty.math.Vector2D(x - lastX, y - lastY))
  lastPos.set(this, { x, y })
}
