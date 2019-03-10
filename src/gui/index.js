import './controls/label'
import './powerup-panel'
import './debug-info'

import { keypad } from '@/device'
import { Events } from '@/constants'

const playerScore = new WeakMap()

export class GuiManager {
  static init (godmode) {
    Crafty.e()
      .setName('__GUIManager')
      .bind('KeyUp', keyUp)
    Crafty.e('DebugInfo')

    const scoreLabel = Crafty.e('UILabel')
      .attr({ x: 235 })
      .textColor('#666')
      .text('SCORE: _GOD-MODE_')

    if (!godmode) {
      var setScore = (score = 0) => {
        let nextScore = (playerScore.get(this) || 0) + score
        scoreLabel.text(`SCORE: ${nextScore.toString().padStart(12, '0')}`)
        playerScore.set(this, nextScore)
      }

      Crafty.bind(Events.PLAYER_SCORE, function (score) {
        setScore(score)
      })

      setScore(0)
    }
  }

  static getPlayerScore () {
    return playerScore.get(this)
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
