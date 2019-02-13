import '@/components/move-forward'
import '@/components/kill-z'
import '@/components/random-start'
import '@/components/loot-table'
import { EnemyBase } from './base'
import { screenSize } from '@/device'
import { ObjectPowerUp } from '@/scenes/objects'

export class EnemyPowerHost extends EnemyBase {
  constructor () {
    super('Sprite_EnemyPowerHost')
    this._entity
      .addComponent('MoveForward, KillZ, LootTable, RandomStart')
      .collision([8, 8, 8, 24, 24, 24, 24, 8])
      .setStructure(4, 0, 'Sprite_ExplosionEnemyHost')
      .setRandomStart({ top: -32, left: 32, right: screenSize.w, bottom: -32 })
      .setLootTable([
        { Class: ObjectPowerUp, chance: 100 }
      ])
      .moveForward(40)
  }
}