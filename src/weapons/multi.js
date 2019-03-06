import { createWeaponBase } from './base'
import { createMultiProjectile } from './projectiles'

const data = [
  { level: 1, power: 1, wave: 1, way: 3, rateOfFire: 1 },
  { level: 2, power: 1, wave: 1, way: 5, rateOfFire: 1 },
  { level: 3, power: 1, wave: 1, way: 7, rateOfFire: 1 },
  { level: 4, power: 1, wave: 1, way: 7, rateOfFire: 1.5 },
  { level: 5, power: 2, wave: 1, way: 7, rateOfFire: 1.5 }
]

export const createWeaponMulti = () => {
  return createWeaponBase()
    .setWeaponData(data, spawnFn)
}

function spawnFn (spec) {
  const forward = this.getForward()
  const { ox, oy } = this
  const { level, power } = spec
  const { way } = spec

  spawnProjectile.call(this, { forward, ox, oy, level, power })
  spawnProjectile.call(this, { forward: forward.rotateDeg(-15), ox, oy, level, power })
  spawnProjectile.call(this, { forward: forward.rotateDeg(15), ox, oy, level, power })

  if (way >= 5) {
    spawnProjectile.call(this, { forward: forward.rotateDeg(-30), ox, oy, level, power })
    spawnProjectile.call(this, { forward: forward.rotateDeg(30), ox, oy, level, power })
  }

  if (way >= 7) {
    spawnProjectile.call(this, { forward: forward.rotateDeg(-45), ox, oy, level, power })
    spawnProjectile.call(this, { forward: forward.rotateDeg(45), ox, oy, level, power })
  }
}

function spawnProjectile ({ forward, ox, oy, level, power }) {
  const profile = this._parent.collisionProfile
  return createMultiProjectile({
    forward,
    profile,
    level,
    power
  }).attr({ ox, oy })
}
