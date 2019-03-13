// Local vars

// Component definition

Crafty.c('UILabel', {
  required: 'UILayer, 2D, Text',
  init: function () {
    this.attr({ h: 12 })
      .text('This is a label')
      .textFont({ family: '8bit', size: '12px' })
      .textColor('#FFFFFF')
  }
})

// Helpers
