import { createEnemyBase } from './base'

export const createEnemyPowerHost = () => {
  return createEnemyBase('Sprite_EnemyPowerHost')
    .setHitbox([8, 8, 8, 24, 24, 24, 24, 8])
    .setStructure(2, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01' })
}
