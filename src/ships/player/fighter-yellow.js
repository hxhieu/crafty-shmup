import { createPlayerBase } from './base'
import { createWeaponMulti } from '@/weapons'
import { Events } from '@/constants'

const SPRITE = 'Sprite_PlayerYellow'

export const createPlayerFighterYellow = speed => {
  return createPlayerBase(speed)
    .addComponent(SPRITE)
    .trigger(Events.PLAYER_SPRITE_SET, SPRITE)
    .useWeapon(createWeaponMulti)
}
