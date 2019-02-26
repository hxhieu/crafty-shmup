import '@/components/random-start'
import '@/components/move-zig-zag'
import { createEnemyBase } from './base'

export const createEnemyFly = () => {
  return createEnemyBase('Sprite_EnemyFly')
    .addComponent('RandomStart, MoveZigZag')
    .setHitbox([14, 14, 14, 26, 26, 26, 26, 14])
    .setStructure(4, 0, { explode: 'Sprite_ExplosionEnemyFly' })
    .setRandomStart({ top: -64, bottom: -16 })
    .moveZigZag(12000, 3000, 20)
}
