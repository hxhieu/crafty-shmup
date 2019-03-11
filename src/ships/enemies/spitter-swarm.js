import { screenSize } from '@/device'
import { createEnemySpitter } from './spitter'

export const createSpitterSwarm = (side, size = 3) => {
  const { w, h } = screenSize
  const padding = 30
  const moveXPivot = side ? Crafty.math.randomNumber(w / 2 + padding, w - padding) : Crafty.math.randomNumber(padding, w / 2 - padding)
  const startX = side ? w + 50 : -50
  const startY = h / 3
  const timer = Crafty.e('Delay')
  const moveY = Crafty.math.randomNumber(startY - 20, startY + 20)

  for (let i = 0; i < size; i++) {
    const moveXPer = i * (side ? -20 : 20)
    timer.delay(() => {
      createEnemySpitter({ startX, startY, moveY: moveY - i * 10, moveX: moveXPivot + moveXPer })

      if (i >= size - 1) {
        timer.destroy()
      }
    }, i * 250)
  }
}
