import { createEnemyBase } from './base'

export const createEnemyPowerHost = () => {
  return createEnemyBase('Sprite_EnemyPowerHost')
    .setHitbox([8, 8, 8, 18, 18, 18, 18, 8])
    .setStructure(1, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01', volume: 0.5 })
    .setScorePoint(10)
}
