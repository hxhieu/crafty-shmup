import { keypad } from '@/device'

// Local vars

// Component definition

Crafty.c('MainMenu', {
  required: '2D, Text',

  events: {
    KeyUp: keyUp,
    EnterFrame: function (e) {
      Crafty.pause()
    }
  },

  init: function () {
    this.attr({ x: 100, y: 100, w: 100, h: 20 })
      .text('Press Start to exit')
      .textColor('#FFFFFF')
  },

  hide: function () {
    Crafty.pause()
    this.destroy()
  }
})

// Helpers

function keyUp (e) {
  switch (e.key) {
    case keypad.START: {
      Crafty.stop(true)
      nw.App.closeAllWindows()
      break
    }
  }
  console.log(e.key)
}
