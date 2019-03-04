import { createEnemyBossBase } from './base'

export const createYellowCrabBoss = () => {
  return createEnemyBossBase('Sprite_EnemyBoss01')
    .setStructure(4, 0, 'Sprite_ExplosionBossYellowCrab')
    .setHitbox([16, 16, 16, 48, 48, 48, 48, 16])
}
