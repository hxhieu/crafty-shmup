import { PlayerBase } from './base'

export class PlayerGreenFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this.e.addComponent('Sprite_PlayerGreen')
  }
}
