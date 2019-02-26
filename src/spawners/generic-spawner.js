const active = new WeakMap()

export class GenericSpawner {
  constructor (spawn, lowInterval, highInterval) {
    lowInterval = lowInterval || 1000
    highInterval = highInterval || lowInterval
    this.options = { spawn, lowInterval, highInterval }
  }

  start () {
    active.set(this, true)
    spawnLoop.call(this)
  }

  stop () {
    active.set(this, false)
  }
}

function spawnLoop () {
  const isActive = active.get(this)
  if (!isActive) {
    return
  }
  const { spawn, lowInterval, highInterval } = this.options
  spawn()
  const rand = Crafty.math.randomInt(lowInterval, highInterval)
  setTimeout(() => {
    spawnLoop.call(this)
  }, rand)
}
