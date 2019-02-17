import throttle from 'lodash.throttle'

// Local vars
const fireTimer = new WeakMap()
const currentLevel = new WeakMap()
const throttleFire = new WeakMap()

export class WeaponBase {
  constructor () {
    this.e = Crafty.e('Collider')
    this.specs = {}
    this.setLevel(1)
  }

  normaliseLevel (level, max = 5) {
    if (level > max) return max
    if (level < 1) return 1
    return level
  }

  levelUp () {
    const nextLevel = currentLevel.get(this) + 1
    this.setLevel(nextLevel)
    currentLevel.set(this, nextLevel)
  }

  levelDown () {
    const nextLevel = currentLevel.get(this) - 1
    this.setLevel(nextLevel)
    currentLevel.set(this, nextLevel)
  }

  startFire () {
    this.stopFire()
    throttleFire.get(this)()
    const { rateOfFire } = this.specs
    fireTimer.set(this, setInterval(() => {
      fire.call(this)
    }, 1000 / rateOfFire))
  }

  stopFire () {
    clearInterval(fireTimer.get(this))
  }

  setThrottleFire (rateOfFire) {
    throttleFire.set(this, throttle(fire.bind(this), 1000 / rateOfFire, { trailing: false }))
  }

  getLevel () {
    return currentLevel.get(this)
  }

  // Overrides
  setLevel (level) { }
  spawnProjectiles () {}
}

function fire () {
  const { wave } = this.specs
  this.spawnProjectiles()
  // Waves
  for (let i = 1; i < wave; i++) {
    setTimeout(() => {
      this.spawnProjectiles()
    }, i * 100)
  }
}
