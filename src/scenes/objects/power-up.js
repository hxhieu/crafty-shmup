import '@/components/move-forward'
import '@/components/loot'
import { Loots } from '@/constants'

export class ObjectPowerUp {
  constructor () {
    this.e = Crafty.e(`Collider, Sprite_ObjectPowerUpGold, MoveForward, Loot`)
      .lookDirection(new Crafty.math.Vector2D(0, 1))
      .setLootData({ id: Loots.POWER_UP, sound: 'PowerUp01' })
      .moveForward(20)
  }

  setParent (entity) {
    this.e.setLootParent(entity)
  }
}
