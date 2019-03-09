export { createPlayerFighterRed } from './fighter-red'
export { createPlayerFighterGreen } from './fighter-green'
export { createPlayerFighterYellow } from './fighter-yellow'

export const getPlayerInstance = () => Crafty('PlayerController').get()[0]
