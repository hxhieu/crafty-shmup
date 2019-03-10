export class GenericSpawner {
  constructor (spawn, lowInterval, highInterval, createArgs) {
    lowInterval = lowInterval || 1000
    highInterval = highInterval || lowInterval
    this.options = { spawn, lowInterval, highInterval, createArgs }
    this.timer = Crafty.e('Delay').setName('__GenericSpawner_Timer')
    this.active = false
  }

  start () {
    this.active = true
    spawnLoop.call(this)
  }

  stop () {
    this.active = false
  }
}

function spawnLoop () {
  if (!this.active) {
    return
  }

  const { spawn, lowInterval, highInterval, createArgs } = this.options
  spawn(createArgs)
  const rand = Crafty.math.randomInt(lowInterval, highInterval)

  // Recursive calls here
  this.timer.delay(() => spawnLoop.call(this), rand)
}
