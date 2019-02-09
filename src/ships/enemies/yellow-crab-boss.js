import { EnemyBase } from './base'

export class YellowCrabBoss extends EnemyBase {
  constructor () {
    super('Sprite_EnemyBoss01')
    this._entity.attr({ x: 160, y: 20 })
    this._entity.setStructure(40)
  }
}
