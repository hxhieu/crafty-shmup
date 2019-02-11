import { keypad } from '@/device'
import '@/gui/main-menu'

const mainMenu = new WeakMap()

export class GuiManager {
  static init () {
    Crafty.createLayer('UILayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 1000 })
    Crafty.e().bind('KeyUp', keyUp)

    // FPS
    // Crafty.e('UILayer, 2D, Text')
    //   .attr({ x: screenSize.w - 30, w: screenSize.w })
    //   .textColor('#ffffff')
    //   .textFont({ size: '8px' })
    //   .text('FPS: ')
    //   .bind('EnterFrame', function () {
    //     this.text(`FPS: ${Crafty.timer.FPS()}`)
    //   })
  }
}

function keyUp (e) {
  switch (e.key) {
    case keypad.MENU: {
      if (!mainMenu.get(this)) {
        mainMenu.set(this, Crafty.e('UILayer, MainMenu'))
      } else {
        mainMenu.get(this).hide()
        mainMenu.set(this, undefined)
      }

      break
    }
  }
}
