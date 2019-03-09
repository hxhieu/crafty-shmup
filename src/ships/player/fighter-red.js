import { createPlayerBase } from './base'
import { createWeaponLaser } from '@/weapons'
import { Events } from '@/constants'

const SPRITE = 'Sprite_PlayerRed'

export const createPlayerFighterRed = speed => {
  return createPlayerBase(speed)
    .addComponent(SPRITE)
    .trigger(Events.PLAYER_SPRITE_SET, SPRITE)
    .useWeapon(createWeaponLaser)
}
