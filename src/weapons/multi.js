import { createWeaponBase } from './base'
import { createMultiProjectile } from './projectiles'

const data = [
  { power: 1, wave: 1, rateOfFire: 3 }
]

export const createWeaponMulti = () => {
  return createWeaponBase()
    .setWeaponData(data, spawnFn)
}

function spawnFn (spec) {
  const forward = this.getForward()
  const { x, y } = this.getCentrePos()
  const { way, level, power } = spec
  const profile = this._parent.collisionProfile
  const size = 16

  createMultiProjectile({
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
