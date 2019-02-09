import './two-dee-ext'

// Local vars

let lastX = 0
let lastY = 0
let velocity = new Crafty.math.Vector2D()

// Component definition

Crafty.c('Velocity', {
  required: '2DExt, Fourway',
  events: {
    EnterFrame
  },
  getVelocity: function () {
    return velocity
  }
})

// Helpers

function EnterFrame () {
  velocity = new Crafty.math.Vector2D(this.x - lastX, this.y - lastY)
  lastX = this.x
  lastY = this.y
}
