import '@/components/move-forward'
import '@/components/kill-z'
import '@/components/random-start'
import { EnemyBase } from './base'
import { screenSize } from '@/device'

export class EnemyPowerHost extends EnemyBase {
  constructor () {
    super('Sprite_EnemyPowerHost')
    this._entity
      .addComponent('MoveForward, KillZ, RandomStart')
      .collision([8, 8, 8, 24, 24, 24, 24, 8])
      .setStructure(4, 0, 'Sprite_ExplosionEnemyHost')
      .setRandomStart({ top: -32, left: 32, right: screenSize.w, bottom: -32 })
      .moveForward(40)
  }
}
