export { createPlayerRedFighter } from './red-fighter'
export { createPlayerGreenFighter } from './green-fighter'
export { createPlayerYellowFighter } from './yellow-fighter'

export const getPlayerInstance = () => Crafty('PlayerController').get()[0]
