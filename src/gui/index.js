import { keypad } from '@/device'
import './controls/label'
import './main-menu'
import './powerup-panel'
import './debug-info'

const mainMenu = new WeakMap()
const instance = new WeakMap()

export class GuiManager {
  static init () {
    instance.set(this, Crafty.e()
      .setName('__GUIManager')
      .bind('KeyUp', keyUp)
    )

    Crafty.e('DebugInfo')
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
