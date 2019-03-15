import '@/components/kill-z'
import '@/components/move-forward'
import { createEnemyBase } from './base'

export const createEnemyWaller = () => {
  return createEnemyBase('Sprite_EnemyWaller')
    .addComponent('KillZ, MoveForward')
    .setHitbox(16)
    .setStructure(10, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01', volume: 0.5 })
    .setScorePoint(20)
    .moveForward(80)
}
