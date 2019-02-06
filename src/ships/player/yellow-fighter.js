import { PlayerBase } from './base'

export class PlayerYellowFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this._entity.addComponent('Sprite_PlayerYellow')
  }
}
