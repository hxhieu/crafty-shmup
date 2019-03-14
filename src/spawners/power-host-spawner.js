import { GenericSpawner } from './generic-spawner'
import { createPowerHostSwarm } from '@/ships/enemies'

const WAVE_DELAY = 30000
const PER_WAVE = 6

export class PowerHostSpawner {
  constructor () {
    this.timer = Crafty.e('Delay')
    this.spawner = new GenericSpawner(createPowerHostSwarm, 4000, 4000, PER_WAVE)
    // Delay the very first wave
    this.timer.delay(() => {
      this.spawner.start()
      // Infinite spawn
      this.timer.delay(() => {
        this.spawner.start()
      }, WAVE_DELAY, -1)
    }, 3000)
  }
}
