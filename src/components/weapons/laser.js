import { WeaponBase } from './base'
import { LaserBeam } from './projectiles'

export class WeaponLaser extends WeaponBase {
  setLevel (level) {
    let newSpecs = {
      level,
      power: 1,
      wave: 1,
      rateOfFire: 2
    }
    level = this.normaliseLevel(level)
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

    this.specs = newSpecs
    this.setThrottleFire(newSpecs.rateOfFire)

    return this
  }

  spawnProjectiles () {
    const forward = this.e.getForward()
    const { x, y } = this.e.getCentrePos()
    const { level } = this.specs
    const beam = new LaserBeam({
      x, y, forward, level
    })
    this.e.attach(beam.e)

    return this
  }
}
