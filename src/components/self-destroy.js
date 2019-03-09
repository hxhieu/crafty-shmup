// Local vars

// Component definition

Crafty.c('SelfDestroy', {
  required: 'Collider, Delay',
  destroying: false,

  events: {
    ExitFrame
  }
})

// Helpers

function ExitFrame () {
  if (!this.destroying && this.outOfScreen()) {
    this.destroying = true
    // Give it some window before actually destroy
    this.delay(() => {
      if (this.outOfScreen()) {
        this.destroy()
      } else {
        this.destroying = false
      }
    }, 1000)
  }
}
