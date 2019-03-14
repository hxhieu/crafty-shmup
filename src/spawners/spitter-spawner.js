import { createSpitterSwarm } from '@/ships/enemies'

const BIG_WAVE_GAP = 15000
const SMALL_WAVE_GAP = 2000
const SMALL_WAVE_SIZE = 4

export class SpitterSpawner {
  constructor () {
    this.timer = Crafty.e('Delay').setName('__SpitterSpawner_Timer')
    this.active = false
    this.spawnCount = 0
  }

  start () {
    this.active = true
    spawnLoop.call(this)
  }

  stop (clear) {
    this.active = false
    if (clear) {
      Crafty('Sprite_EnemySpitter').get().forEach(x => x.destroy())
    }
  }
}

function spawnLoop () {
  if (!this.active) {
    return
  }

  // Alternate the sides
  this.timer.delay(() => {
    if (!this.active) {
      return
    }
    createSpitterSwarm(this.spawnCount % 2)
    this.spawnCount++
  }, SMALL_WAVE_GAP, SMALL_WAVE_SIZE)

  // Recursive calls here
  this.timer.delay(() => spawnLoop.call(this), BIG_WAVE_GAP)
}
