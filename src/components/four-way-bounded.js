import { screen } from '@/sizes'

Crafty.c('FourwayBounded', {
  _bound: screen,

  _enterFrame: function () {
    if (this.x <= this._bound.left) {
      this.x = 0
    }
    if (this.x >= this._bound.right) {
      this.x = this._bound.right
    }
    if (this.y >= this._bound.bottom) {
      this.y = this._bound.bottom
    }
    if (this.y <= this._bound.top) {
      this.y = this._bound.top
    }
  },

  init: function () {
    this.addComponent('Fourway')
    this.bind('EnterFrame', this._enterFrame)
  },

  fourwayBounded: function (speed, bound) {
    bound = bound || screen
    this._bound = {
      left: 0,
      top: 0,
      right: bound.w - this.w,
      bottom: bound.h - this.h
    }
    this.fourway(speed, { normalize: true })
  }
})
