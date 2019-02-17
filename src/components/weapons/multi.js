import { WeaponBase } from './base'
import { MultiProjectile } from './projectiles'

export class WeaponMulti extends WeaponBase {
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
    const { way, level, power } = this.specs
    const profile = this.e._parent.collisionProfile
    const size = 16

    /* eslint-disable no-new */
    // 1st
    new MultiProjectile({
      x: x - size / 2,
      y: y - size,
      forward,
      profile,
      level,
      power
    })

    if (way >= 3) {
      // new MultiProjectile({
      //   x: x - 16,
      //   y: y,
      //   forward: new Crafty.math.Vector2D(-1, -1),
      //   profile,
      //   level,
      //   power
      // })
      // new MultiProjectile({
      //   x,
      //   y: y - 8,
      //   forward: new Crafty.math.Vector2D(1, -1),
      //   profile,
      //   level,
      //   power
      // })
    }

    // if (way >= 5) {
    //   new MultiProjectile({
    //     x: x - 16,
    //     y: y + 8,
    //     forward: new Crafty.math.Vector2D(-1, 0),
    //     profile,
    //     level,
    //     power
    //   })
    //   new MultiProjectile({
    //     x,
    //     y: y - 8,
    //     forward: new Crafty.math.Vector2D(1, 0),
    //     profile,
    //     level,
    //     power
    //   })
    // }

    // if (way >= 6) {
    //   new MultiProjectile({
    //     x: x + 8,
    //     y: y,
    //     forward: new Crafty.math.Vector2D(0, 1),
    //     profile,
    //     level,
    //     power
    //   })
    // }
  }
}
