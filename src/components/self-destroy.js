// Local vars

// Component definition

Crafty.c('SelfDestroy', {
  required: 'Collider',

  events: {
    ExitFrame
  }
})

// Helpers

function ExitFrame () {
  if (this.outOfScreen()) {
    this.destroy()
  }
}
