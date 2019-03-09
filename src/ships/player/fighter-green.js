import { createPlayerBase } from './base'
import { createWeaponMulti } from '@/weapons'
import { Events } from '@/constants'

const SPRITE = 'Sprite_PlayerGreen'

export const createPlayerFighterGreen = initHp => {
  return createPlayerBase(initHp)
    .addComponent(SPRITE)
    .trigger(Events.PLAYER_SPRITE_SET, SPRITE)
    .useWeapon(createWeaponMulti)
}
