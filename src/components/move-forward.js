// Local vars

// Component definition

Crafty.c('MoveForward', {
  required: '2DExt, Motion',

  moveForward: function (speed) {
    const forward = this.getForward()
    const velocity = this.velocity()
    velocity.x = forward.x * speed
    velocity.y = forward.y * speed
    return this
  }
})
