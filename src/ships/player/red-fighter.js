import { PlayerBase } from './base'

export class PlayerRedFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this._entity.addComponent('Sprite_PlayerRed')
  }
}
