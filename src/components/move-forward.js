// Local vars

// Component definition

Crafty.c('MoveForward', {
  required: '2DExt, Motion',

  events: {
    EnterFrame
  },

  moveForward: function (spd) {
    this.speed = spd
    return this
  }
})

function EnterFrame ({ dt }) {
  const delta = dt / 1000
  const forward = this.getForward()
  this.x += delta * this.speed * forward.x
  this.y += delta * this.speed * forward.y
}
