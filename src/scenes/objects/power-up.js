import '@/components/move-forward'
import '@/components/loot'
import { Loots } from '@/constants'

export const createPowerUp = () => {
  const e = Crafty.e(`Sprite_ObjectPowerUpGold, MoveForward, Loot`)
    .lookDirection(new Crafty.math.Vector2D(0, 1))
    .setLootData({ id: Loots.POWER_UP, sound: 'PowerUp01', score: 1000 })
    .moveForward(20)

  return e
}
