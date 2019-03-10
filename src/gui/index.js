import { keypad } from '@/device'
import './controls/label'
import './powerup-panel'
import './debug-info'

export class GuiManager {
  static init () {
    Crafty.e()
      .setName('__GUIManager')
      .bind('KeyUp', keyUp)
    Crafty.e('DebugInfo')
  }
}

function keyUp (e) {
  switch (e.key) {
    case keypad.MENU: {
      window.gamePause()
      break
    }
  }
}
