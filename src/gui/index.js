import { keypad } from '@/device'

let mainMenu

export class GuiManager {
  static init () {
    Crafty.createLayer('UILayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 1000 })
    Crafty.e().bind('KeyUp', keyUp)
  }
}

function keyUp (e) {
  switch (e.key) {
    case keypad.MENU: {
      if (!mainMenu) {
        mainMenu = Crafty.e('UILayer, MainMenu')
      } else {
        mainMenu.hide()
        mainMenu = undefined
      }

      break
    }
  }
}
