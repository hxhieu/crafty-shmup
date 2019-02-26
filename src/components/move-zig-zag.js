import '@/components/move-to'
import { screenSize } from '@/device'
import { Events } from '@/constants'

// Local vars

const specs = new WeakMap()

// Component definition

Crafty.c('MoveZigZag', {
  required: 'MoveTo',

  events: {
    [Events.MOVE_ZIG_ZAG_X]: moveX,
    [Events.MOVE_ZIG_ZAG_Y]: moveY
  },

  moveZigZag: function (turnX, turnY, speed) {
    specs.set(this, { turnX, turnY, speed })
    this.trigger(Events.MOVE_ZIG_ZAG_Y)
    // When the entity reaches the edge, just turn around to the opposite direction
    this.bind(Events.MOVE_TO_ENDED, moveX)
    return this
  }
})

// Helpers

function moveX () {
  const { turnX, speed } = specs.get(this)
  const { w } = screenSize
  const nextX = this.x < w / 4 ? w - this.w : 0
  this.moveTo({ x: nextX, y: this.y, speed: speed })
  setTimeout(() => {
    this.trigger(Events.MOVE_ZIG_ZAG_Y)
  }, turnX)
}

function moveY () {
  const { turnY, speed } = specs.get(this)
  this.moveTo({ x: this.x, y: screenSize.h, speed: speed })
  setTimeout(() => {
    this.trigger(Events.MOVE_ZIG_ZAG_X)
  }, turnY)
}
