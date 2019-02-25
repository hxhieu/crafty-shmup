import { createPlayerBase } from './base'
import { createWeaponMulti } from '@/weapons'

export const createPlayerYellowFighter = speed => {
  return createPlayerBase(speed)
    .addComponent('Sprite_PlayerYellow')
    .useWeapon(createWeaponMulti())
}
