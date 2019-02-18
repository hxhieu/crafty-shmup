import { createPlayerBase } from './base'

export const createPlayerYellowFighter = speed => {
  return createPlayerBase(speed)
    .addComponent('Sprite_PlayerYellow')
}
