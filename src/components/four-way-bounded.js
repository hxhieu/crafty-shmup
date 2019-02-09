// Local vars

const bound = new WeakMap()

// Component definition

Crafty.c('FourwayBounded', {
  required: 'Fourway',

  events: {
    EnterFrame
  },

  fourwayBounded: function (speed, rect) {
    bound.set(this, {
      left: 0,
      top: 0,
      right: rect.w - this.w,
      bottom: rect.h - this.h
    })
    this.fourway(speed, { normalize: true })
    return this
  }
})

// Helpers

function EnterFrame () {
  const rect = bound.get(this)
  if (this.x <= rect.left) {
    this.x = 0
  }
  if (this.x >= rect.right) {
    this.x = rect.right
  }
  if (this.y >= rect.bottom) {
    this.y = rect.bottom
  }
  if (this.y <= rect.top) {
    this.y = rect.top
  }
}
