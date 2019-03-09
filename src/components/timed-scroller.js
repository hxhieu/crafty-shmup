import { screenSize } from '@/device'

Crafty.c('TimedScroller', {
  required: '2DExt',
  _speed: 0,

  events: {
    ExitFrame
  },

  setTimedScroll: function (opts) {
    const { speed } = opts
    this._speed = speed
    return this
  }
})

function ExitFrame () {
  if (this._speed <= 0) {
    return
  }

  this.y += this._speed

  if (this.y > screenSize.h) {
    this.destroy()
  }
}
