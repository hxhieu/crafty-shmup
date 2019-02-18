import '@/components/move-forward'
import '@/components/kill-z'
import '@/components/random-start'
import '@/components/loot-table'
import { createEnemyBase } from './base'
import { screenSize } from '@/device'
import { createPowerUp } from '@/scenes/objects'

export const createEnemyPowerHost = () => {
  return createEnemyBase('Sprite_EnemyPowerHost')
    .addComponent('MoveForward, KillZ, LootTable, RandomStart')
    .setHitbox([8, 8, 8, 24, 24, 24, 24, 8])
    .setStructure(2, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01' })
    .setRandomStart({ top: -32, left: 32, right: screenSize.w, bottom: -32 })
    .setLootTable([
      { create: createPowerUp, chance: 100 }
    ])
    .moveForward(40)
}
