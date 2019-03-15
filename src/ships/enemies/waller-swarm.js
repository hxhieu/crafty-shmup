import { screenSize } from '@/device'
import { createEnemyWaller } from './waller'

const SPEED = 60

export const createWallerSwarm = (size = 5) => {
  const unitSize = 16
  const { w } = screenSize
  const startX = Crafty.math.randomNumber(unitSize, w - (unitSize * size) - 32)
  const startY = -16

  for (let i = 0; i < size; i++) {
    createEnemyWaller()
      .attr({ x: startX + unitSize * i, y: startY })
      .moveForward(SPEED)
  }
}
