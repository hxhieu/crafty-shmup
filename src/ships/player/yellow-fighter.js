import { PlayerBase } from './base'

export class PlayerYellowFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this.e.addComponent('Sprite_PlayerYellow')
  }
}
