import { createWeaponBase } from './base'
import { createLaserBeam } from './projectiles'

const data = [
  { level: 1, power: 1, width: 4, rateOfFire: 1 },
  { level: 2, power: 1.5, width: 5, rateOfFire: 1 },
  { level: 3, power: 1.75, width: 6, rateOfFire: 1.25 },
  { level: 4, power: 2, width: 12, rateOfFire: 1.5 }
]

export const createWeaponLaser = () => {
  return createWeaponBase()
    .setWeaponData(data, spawnFn)
}

function spawnFn (spec) {
  const forward = this.getForward()
  const { ox, oy } = this
  const profile = this._parent.collisionProfile
  const props = Object.assign(spec, { x: ox, y: oy, forward })
  const beam = createLaserBeam(profile, props)
  this.attach(beam)

  return this
}
