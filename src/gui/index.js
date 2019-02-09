import { keypad } from '@/device'
import '@/gui/main-menu'

const mainMenu = new WeakMap()

export class GuiManager {
  static init () {
    Crafty.createLayer('UILayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 1000 })
    Crafty.e().bind('KeyUp', keyUp)
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
