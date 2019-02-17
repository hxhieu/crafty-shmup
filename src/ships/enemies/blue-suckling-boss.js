import { BossBase } from './base'

export class BlueSucklingBoss extends BossBase {
  constructor () {
    super('Sprite_EnemyBoss02')
    this.e.setStructure(4, 3, 'Sprite_ExplosionBossBlueSuckling')
    this.e.setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
  }
}
