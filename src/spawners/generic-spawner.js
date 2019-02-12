const active = new WeakMap()

export class GenericSpawner {
  constructor (SpawnClass, lowInterval, highInterval) {
    lowInterval = lowInterval || 1000
    highInterval = highInterval || lowInterval
    this.options = { SpawnClass, lowInterval, highInterval }
    this.spawns = []
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
  const { SpawnClass, lowInterval, highInterval } = this.options
  this.spawns.push(new SpawnClass())
  const rand = Crafty.math.randomInt(lowInterval, highInterval)
  setTimeout(() => {
    spawnLoop.call(this)
  }, rand)
}
