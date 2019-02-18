const active = new WeakMap()

export class GenericSpawner {
  constructor (spawn, lowInterval, highInterval) {
    lowInterval = lowInterval || 1000
    highInterval = highInterval || lowInterval
    this.options = { spawn, lowInterval, highInterval }
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
  const { spawn, lowInterval, highInterval } = this.options
  const e = spawn()
  if (e.setPosition) {
    e.setPosition({ x: 240, y: 40 })
  }
  this.spawns.push(e)
  const rand = Crafty.math.randomInt(lowInterval, highInterval)
  setTimeout(() => {
    spawnLoop.call(this)
  }, rand)
}
