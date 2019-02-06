import { PlayerBase } from './base'
import { VulcanProjectile } from '@/projectiles'

export class PlayerYellowFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this._entity.addComponent('Sprite_PlayerYellow')
    this._entity.setProjectileClass(VulcanProjectile)
  }
}
