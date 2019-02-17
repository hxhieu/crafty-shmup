import { BossBase } from './base'

export class YellowCrabBoss extends BossBase {
  constructor () {
    super('Sprite_EnemyBoss01')
    this.e.setStructure(4, 0, 'Sprite_ExplosionBossYellowCrab')
    this.e.setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
  }
}
