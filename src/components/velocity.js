import './two-dee-ext'

// Local vars

const lastX = new WeakMap()
const lastY = new WeakMap()
const velocity = new WeakMap()

// Component definition

Crafty.c('Velocity', {
  required: '2DExt, Fourway',
  events: {
    EnterFrame
  },
  getVelocity: function () {
    return velocity.get(this) || new Crafty.math.Vector2D()
  }
})

// Helpers

function EnterFrame () {
  velocity.set(this, new Crafty.math.Vector2D(this.x - lastX.get(this), this.y - lastY.get(this)))
  lastX.set(this, this.x)
  lastY.set(this, this.y)
}
