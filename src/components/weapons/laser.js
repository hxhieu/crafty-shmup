import throttle from 'lodash.throttle'
import { WeaponBase } from './base'
import { LaserBeam } from './projectiles'

// Local vars
const fireTimer = new WeakMap()
const throttleFire = new WeakMap()
const fireOptions = new WeakMap()
const specs = new WeakMap()
const currentLevel = new WeakMap()

export class WeaponLaser extends WeaponBase {
  constructor (options) {
    super()
    fireOptions.set(this, options)
    this.setWeaponLevel(1)
  }

  levelUp () {
    this.setWeaponLevel(currentLevel.get(this) + 1)
  }

  setWeaponLevel (level) {
    if (level > 5) {
      return
    }

    let newSpecs = {
      level,
      power: 1,
      wave: 1,
      rateOfFire: 2
    }
    switch (level) {
      case 1: {
        newSpecs = Object.assign(newSpecs, {
          way: 3
        })
        break
      }
      case 2: {
        newSpecs = Object.assign(newSpecs, {
          way: 5
        })
        break
      }
      case 3: {
        newSpecs = Object.assign(newSpecs, {
          way: 6
        })
        break
      }
      case 4: {
        newSpecs = Object.assign(newSpecs, {
          power: 2,
          way: 6
        })
        break
      }
      case 5: {
        newSpecs = Object.assign(newSpecs, {
          power: 2,
          way: 6,
          wave: 2
        })
        break
      }
    }

    specs.set(this, newSpecs)
    currentLevel.set(this, level)
    throttleFire.set(this, throttle(fire.bind(this), 1000 / newSpecs.rateOfFire, { trailing: false }))

    return this
  }

  startFire () {
    this.stopFire()
    throttleFire.get(this)()
    const { rateOfFire } = specs.get(this)
    fireTimer.set(this, setInterval(() => {
      fire.call(this)
    }, 1000 / rateOfFire))
  }
  stopFire () {
    clearInterval(fireTimer.get(this))
  }
}

function fire () {
  const { wave } = specs.get(this)
  spawnProjectiles.call(this)
  // Waves
  for (let i = 1; i < wave; i++) {
    setTimeout(() => {
      spawnProjectiles.call(this)
    }, i * 100)
  }
}

function spawnProjectiles () {
  const forward = this.e.getForward()
  const { x, y } = this.e.getCentrePos()
  const beam = new LaserBeam({
    x, y, forward
  })
  this.e.attach(beam.e)
  console.log(beam)
}
