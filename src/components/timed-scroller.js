import '@/components/two-dee-ext'
import { screenSize } from '@/device'

Crafty.c('TimedScroller', {
  required: '2DExt',
  _speed: 0,

  events: {
    EnterFrame
  },

  setTimedScroll: function (opts) {
    const { speed } = opts
    this._speed = speed
    return this
  }
})

function EnterFrame () {
  if (this._speed <= 0) {
    return
  }

  this.y += this._speed

  if (this.y > screenSize.h) {
    this.destroy()
  }
}
