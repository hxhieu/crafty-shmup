// Local vars

// Component definition

Crafty.c('SelfDestroy', {
  required: 'Collider',

  events: {
    EnterFrame
  }
})

// Helpers

function EnterFrame () {
  if (this.outOfScreen()) {
    this.destroy()
  }
}
