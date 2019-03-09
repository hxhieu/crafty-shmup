// import { screenSize } from '@/device'

// Local vars

// Component definition

Crafty.c('DebugInfo', {
  required: '2D, Delay',
  lblColliderCount: null,

  init: function () {
    this.setName('GUI_Debug')
    this.lblColliderCount = Crafty.e('UILabel').text('Colliders: ')
    this.attach(this.lblColliderCount)

    this.delay(() => {
      this.lblColliderCount.text(`Objects: ${Crafty('Delay').length}`)
    }, 1000, -1)

    // this.attach(
    //   Crafty.e('UILabel')
    //     .text(`UA: ${navigator.userAgent}`)
    //     .attr({ y: 9, w: screenSize.w })
    // )
  }
})
