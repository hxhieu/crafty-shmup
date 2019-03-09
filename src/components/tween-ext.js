// Local vars
const isFlashing = new WeakMap()

// Component definition

Crafty.c('TweenExt', {
  required: 'Tween',

  events: {
    TweenEnd
  },
  tweenFlash: function ({ alpha, time } = {}) {
    alpha = alpha || 0.5
    time = time || 100
    this.tween({ alpha }, time)
    isFlashing.set(this, true)
    return this
  }
})

// Helpers

function TweenEnd () {
  if (isFlashing.get(this)) {
    isFlashing.set(this, false)
    this.attr({ alpha: 1 })
  }
}
