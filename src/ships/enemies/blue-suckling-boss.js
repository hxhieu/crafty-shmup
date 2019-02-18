import { createEnemyBossBase } from './base'

export const createBlueSucklingBoss = () => {
  return createEnemyBossBase('Sprite_EnemyBoss02')
    .setStructure(4, 3, 'Sprite_ExplosionBossBlueSuckling')
    .setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
}
