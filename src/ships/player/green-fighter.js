import { createPlayerBase } from './base'

export const createPlayerGreenFighter = speed => {
  return createPlayerBase(speed)
    .addComponent('Sprite_PlayerGreen')
}
