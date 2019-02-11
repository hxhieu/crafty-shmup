import '@/components/two-dee-ext'

Crafty.c('TimedScroller', {
  required: '2DExt',
  _speed: 0,
  _repeat: false,

  events: {
    EnterFrame
  },

  setTimedScroll: function (opts) {
    const { speed, repeat } = opts
    this._speed = speed
    this._repeat = repeat || false
    return this
  }
})

function EnterFrame () {
  if (this._speed <= 0) {
    return
  }

  this.y += this._speed

  if (this._repeat && this.y >= this.h) {
    this.y = -this.h
  }
}
