// Local vars

const bound = new WeakMap()

// Component definition

Crafty.c('FourwayBounded', {
  required: 'Fourway',

  events: {
    EnterFrame
  },

  fourwayBounded: function (speed, rect) {
    bound.set(this, rect)
    this.fourway(speed, { normalize: true })
    return this
  }
})

// Helpers

function EnterFrame () {
  let rect = bound.get(this)
  const { w, h } = this
  rect = {
    left: 0,
    top: 0,
    right: rect.w - w,
    bottom: rect.h - h
  }
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
