import { PlayerBase } from './base'
import { WeaponLaser } from '@/components/weapons/laser'

export class PlayerRedFighter extends PlayerBase {
  constructor (speed) {
    super(speed)
    this._entity.addComponent('Sprite_PlayerRed')
    const weapon = new WeaponLaser()
    this._entity.setWeapon(weapon)
  }
}
