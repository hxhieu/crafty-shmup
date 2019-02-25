import '@/components/move-zig-zag'
import '@/components/loot-table'
import { screenSize } from '@/device'
import { Events } from '@/constants'
import { createEnemyPowerHost } from './power-host'
import { createPowerUp } from '@/scenes/objects'

export const createPowerHostSwarm = (size = 5) => {
  const { w } = screenSize
  const startX = Crafty.math.randomNumber(32, w - 32)
  const startY = -16
  let count = 0
  for (let i = 0; i < size; i++) {
    setTimeout(() => {
      createEnemyPowerHost()
        .addComponent('MoveZigZag, LootTable')
        .attr({ x: startX, y: startY })
        .moveZigZag(1500, 3000, 30)
        .bind(Events.STRUCTURE_DESTROYED, function () {
          count--
          if (count <= 0) {
            const { x, y } = this.getCentrePos()
            createPowerUp().attr({ ox: x, oy: y })
          }
        })
      count++
    }, i * 500)
  }
}
