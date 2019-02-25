import '@/components/move-to'
import { screenSize } from '@/device'
import { Events } from '@/constants'

// Local vars

const specs = new WeakMap()

// Component definition

Crafty.c('MoveZigZag', {
  required: 'MoveTo',

  events: {
    [Events.MOVE_ZIG_ZAG_X]: turnX,
    [Events.MOVE_ZIG_ZAG_Y]: turnY
  },

  moveZigZag: function (turnX, turnY, speed) {
    specs.set(this, { turnX, turnY, speed })
    this.trigger(Events.MOVE_ZIG_ZAG_Y)
    return this
  }
})

// Helpers

function turnX () {
  const { turnX, speed } = specs.get(this)
  const { w } = screenSize
  const nextX = this.x < w / 4 ? w : 0
  this.moveTo({ x: nextX, y: this.y, speed: speed })
  setTimeout(() => {
    this.trigger(Events.MOVE_ZIG_ZAG_Y)
  }, turnX)
}

function turnY () {
  const { turnY, speed } = specs.get(this)
  this.moveTo({ x: this.x, y: screenSize.h, speed: speed })
  setTimeout(() => {
    this.trigger(Events.MOVE_ZIG_ZAG_X)
  }, turnY)
}
