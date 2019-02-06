import { PlayerBase } from './base'

export class PlayerGreenFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this._entity.addComponent('Sprite_PlayerGreen')
  }
}
