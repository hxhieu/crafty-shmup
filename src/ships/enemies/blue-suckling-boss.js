import { EnemyBase } from './base'

export class BlueSucklingBoss extends EnemyBase {
  constructor () {
    super('Sprite_EnemyBoss02')
    this._entity.attr({ x: 100, y: 20 })
    this._entity.setStructure(50, 50)
  }
}
