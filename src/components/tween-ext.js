// Local vars
let isFlashing

// Component definition

Crafty.c('TweenExt', {
  required: 'Tween',

  events: {
    TweenEnd
  },
  tweenflash: function () {
    this.tween({ alpha: 0.5 }, 200)
    isFlashing = true
    return this
  }
})

// Helpers

function TweenEnd () {
  if (isFlashing) {
    isFlashing = false
    this.attr({ alpha: 1 })
  }
}
