import { createPlayerBase } from './base'
// import { createWeaponLaser } from '@/weapons'

export const createPlayerRedFighter = speed => {
  return createPlayerBase(speed)
    .addComponent('Sprite_PlayerRed')
    // .useWeapon(createWeaponLaser())
}
