// Local vars

// Component definition

Crafty.c('DebugInfo', {
  required: '2D, Delay',
  lblColliderCount: null,

  init: function () {
    this.lblColliderCount = Crafty.e('UILabel').text('Colliders: ')
    this.attach(this.lblColliderCount)

    this.delay(() => {
      this.lblColliderCount.text(`Colliders: ${Crafty('Collider').length}`)
    }, 1000, -1)
  }
})
