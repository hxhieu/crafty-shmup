import { BossBase } from './base'

export class BlueSucklingBoss extends BossBase {
  constructor () {
    super('Sprite_EnemyBoss02')
    this._entity.attr({ x: 100, y: 20 })
    this._entity.setStructure(10, 20, 'Sprite_ExplosionBossBlueSuckling')
    this._entity.setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
  }
}
