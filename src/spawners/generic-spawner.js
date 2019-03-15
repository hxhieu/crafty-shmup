import { getPlayerInstance } from '@/ships/player'

export class GenericSpawner {
  constructor (spawn, lowInterval, highInterval, sprite, count) {
    lowInterval = lowInterval || 1000
    highInterval = highInterval || lowInterval
    this.options = { spawn, lowInterval, highInterval, count, sprite }
    this.timer = Crafty.e('Delay').setName('__GenericSpawner_Timer')
    this.active = false
    this.currentCount = 0
  }

  start () {
    this.active = true
    this.currentCount = 0
    spawnLoop.call(this)
  }

  stop (clear) {
    this.active = false
    if (clear) {
      Crafty(this.options.sprite).get().forEach(x => x.destroy())
    }
  }
}

function spawnLoop () {
  if (!this.active) {
    return
  }

  const { spawn, lowInterval, highInterval, count } = this.options
  const player = getPlayerInstance()
  const playerPower = player ? player.getPowerLevel() : 1
  let spawnRate = 1 - (playerPower * 2 / 100)
  if (spawnRate <= 0.5) {
    spawnRate = 0.5
  }

  console.log(spawnRate)

  spawn()
  this.currentCount++
  if (this.currentCount >= count) {
    this.active = false
    return
  }

  // Recursive calls here
  const rand = Crafty.math.randomInt(lowInterval * spawnRate, highInterval * spawnRate)
  this.timer.delay(() => spawnLoop.call(this), rand)
}
