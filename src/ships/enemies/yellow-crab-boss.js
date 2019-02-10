import { BossBase } from './base'

export class YellowCrabBoss extends BossBase {
  constructor () {
    super('Sprite_EnemyBoss01')
    this._entity.attr({ x: 160, y: 20 })
    this._entity.setStructure(1, 0, 'Sprite_ExplosionBossYellowCrab')
    this._entity.setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
  }
}
