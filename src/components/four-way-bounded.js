import { screen } from '@/sizes'

// Local vars

let bound

// Component definition

Crafty.c('FourwayBounded', {
  required: 'Fourway',

  events: {
    EnterFrame: enterFrame
  },

  fourwayBounded: function (speed, rect) {
    rect = rect || screen
    bound = {
      left: 0,
      top: 0,
      right: rect.w - this.w,
      bottom: rect.h - this.h
    }
    this.fourway(speed, { normalize: true })
  }
})

// Helpers

function enterFrame () {
  if (this.x <= bound.left) {
    this.x = 0
  }
  if (this.x >= bound.right) {
    this.x = bound.right
  }
  if (this.y >= bound.bottom) {
    this.y = bound.bottom
  }
  if (this.y <= bound.top) {
    this.y = bound.top
  }
}
