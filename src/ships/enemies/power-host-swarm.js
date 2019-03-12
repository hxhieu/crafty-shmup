import '@/components/move-zig-zag'
import '@/components/loot-table'
import { screenSize } from '@/device'
import { Events } from '@/constants'
import { createEnemyPowerHost } from './power-host'
import { createPowerUp } from '@/scenes/objects'

const SPAWN_GAP = 600
const TURN_X = 1500
const TURN_Y = 3000
const SPEED = 30

export const createPowerHostSwarm = (size = 5) => {
  const { w } = screenSize
  const startX = Crafty.math.randomNumber(32, w - 32)
  const startY = -16
  let count = size
  const timer = Crafty.e('Delay')

  for (let i = 0; i < size; i++) {
    timer.delay(() => {
      createEnemyPowerHost()
        .addComponent('MoveZigZag')
        .attr({ x: startX, y: startY })
        .moveZigZag(TURN_X, TURN_Y, SPEED)
        .bind(Events.STRUCTURE_DESTROYED, function () {
          count--
          if (count <= 0) {
            const { ox, oy } = this
            createPowerUp().attr({ ox, oy })
          }
        })
      if (i >= size - 1) {
        timer.destroy()
      }
    }, i * SPAWN_GAP)
  }
}
