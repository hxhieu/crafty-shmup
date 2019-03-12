import '@/components/kill-z'
import { createEnemyBase } from './base'

export const createEnemyPowerHost = () => {
  return createEnemyBase('Sprite_EnemyPowerHost')
    .addComponent('KillZ')
    .setHitbox(16)
    .setStructure(1, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01', volume: 0.5 })
    .setScorePoint(10)
}
