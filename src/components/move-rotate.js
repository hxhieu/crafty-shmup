import './velocity'

// Component definition

Crafty.c('MoveRotate', {
  required: 'Velocity, SpriteAnimation',
  events: {
    'EnterFrame': enterFrame
  }
})

// Helpers

function enterFrame () {
  const velocity = this.getVelocity()
  const forward = this.getForward()
  const currentReel = this.getReel().id
  const rotateLeft = (forward.y < 0 && velocity.x < 0) || (forward.y >= 0 && velocity.x > 0)
  const rotateRight = (forward.y < 0 && velocity.x > 0) || (forward.y >= 0 && velocity.x < 0)

  if (rotateLeft) {
    if (currentReel !== 'rotateLeft') {
      this.animate('rotateLeft', -1)
    }
  } else if (rotateRight) {
    if (currentReel !== 'rotateRight') {
      this.animate('rotateRight', -1)
    }
  } else {
    if (currentReel !== 'level') {
      this.animate('level', -1)
    }
  }
}
