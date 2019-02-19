import { keypad } from '@/device'
import './main-menu'
import './powerup-panel'

const mainMenu = new WeakMap()
const instance = new WeakMap()

export class GuiManager {
  static init () {
    Crafty.createLayer('UILayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 1000 })
    instance.set(this, Crafty.e()
      .bind('KeyUp', keyUp)
    )
  }

  static instance () {
    return instance.get(this)
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
