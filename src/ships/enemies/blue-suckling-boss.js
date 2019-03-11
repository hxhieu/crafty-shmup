import { createEnemyBossBase } from './base'

export const createBlueSucklingBoss = () => {
  return createEnemyBossBase('Sprite_EnemyBoss02')
    .setStructure(4, 3, 'Sprite_ExplosionBossBlueSuckling')
    .setHitbox(32)
}
