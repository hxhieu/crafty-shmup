import throttle from 'lodash.throttle'

// Local vars
const specs = new WeakMap()
const currentLevel = new WeakMap()
const throttleFire = new WeakMap()
const spawnFn = new WeakMap()
const currentSpec = new WeakMap()

// Component definition

Crafty.c('Weapon', {
  required: 'Delay',

  setWeaponData: function (data, fn) {
    specs.set(this, data)
    spawnFn.set(this, fn)
    changeLevel.call(this, 1) // Start as level 1
    return this
  },

  setWeaponLevelUp: function () {
    return changeLevel.call(this, 1)
  },

  setWeaponLevelDown: function () {
    return changeLevel.call(this, -1)
  },

  startFire: function (continuos = true) {
    this.stopFire()
    throttleFire.get(this)()
    if (continuos) {
      const { rateOfFire } = currentSpec.get(this)
      this.delay(fire, 1000 / rateOfFire, -1)
    }
    return this
  },

  stopFire: function () {
    this.cancelDelay(fire)
    return this
  },

  getLevel: function () {
    return currentLevel.get(this)
  }
})

function normaliseLevel (level, max = 5) {
  if (level > max) return max
  if (level < 1) return 1
  return level
}

function changeLevel (delta) {
  const nextLevel = normaliseLevel((currentLevel.get(this) || 0) + delta)
  currentLevel.set(this, nextLevel)
  const spec = specs.get(this)[nextLevel - 1]
  const { rateOfFire } = spec
  throttleFire.set(this, throttle(fire.bind(this), 1000 / rateOfFire, { trailing: false }))
  currentSpec.set(this, spec)

  return this
}

function fire () {
  const spec = currentSpec.get(this)
  const { wave } = spec
  const fn = spawnFn.get(this)
  fn.call(this, spec)
  for (let i = 1; i < wave; i++) {
    setTimeout(() => {
      fn.call(this, spec)
    }, i * 100)
  }

  return this
}
