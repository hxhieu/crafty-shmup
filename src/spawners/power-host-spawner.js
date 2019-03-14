import { GenericSpawner } from './generic-spawner'
import { createPowerHostSwarm } from '@/ships/enemies'

// const WAVE_DELAY = 30000
// Total power cubes can be spawned
const PER_WAVE = 60

export class PowerHostSpawner {
  constructor () {
    this.timer = Crafty.e('Delay')
    this.spawner = new GenericSpawner(createPowerHostSwarm, 20000, 20000, null, PER_WAVE)
    // Delay the very first wave
    this.timer.delay(() => {
      this.spawner.start()
      // // Infinite spawn
      // this.timer.delay(() => {
      //   this.spawner.start()
      // }, WAVE_DELAY, -1)
    }, 3000)
  }
  start () {
    this.spawner.start()
  }
  stop (clear) {
    this.spawner.stop(clear)
  }
}
