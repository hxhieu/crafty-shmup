import { createPlayerBase } from './base'
import { createWeaponMulti } from '@/weapons'

export const createPlayerGreenFighter = speed => {
  return createPlayerBase(speed)
    .addComponent('Sprite_PlayerGreen')
    .useWeapon(createWeaponMulti())
}
