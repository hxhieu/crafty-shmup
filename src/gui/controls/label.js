// Local vars

// Component definition

Crafty.c('UILabel', {
  required: 'UILayer, 2D, Text',
  init: function () {
    this.attr({ w: 100, h: 20 })
      .text('This is a label')
      .textFont({ size: '8px' })
      .textColor('#FFFFFF')
  }
})

// Helpers
