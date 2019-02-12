import { screenSize } from '@/device'

// Component definition

Crafty.c('RandomStart', {
  // required: 'XXX',

  setRandomStart (options) {
    let defaultOptions = {
      top: 0,
      left: 0,
      bottom: screenSize.h,
      right: screenSize.w
    }

    defaultOptions = Object.assign(defaultOptions, options)

    this.x = Crafty.math.randomNumber(defaultOptions.left, defaultOptions.right)
    this.y = Crafty.math.randomNumber(defaultOptions.top, defaultOptions.bottom)
    return this
  }
})
