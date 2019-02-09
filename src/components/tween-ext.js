// Local vars
const isFlashing = new WeakMap()

// Component definition

Crafty.c('TweenExt', {
  required: 'Tween',

  events: {
    TweenEnd
  },
  tweenflash: function () {
    this.tween({ alpha: 0.5 }, 200)
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
