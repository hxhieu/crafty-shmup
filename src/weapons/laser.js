import { createWeaponBase } from './base'
import { createLaserBeam } from './projectiles'

const data = [
  { power: 1, rateOfFire: 2 }
]

export const createWeaponLaser = () => {
  return createWeaponBase()
    .setWeaponData(data, spawnFn)
}

function spawnFn (spec) {
  const forward = this.getForward()
  const { x, y } = this.getCentrePos()
  const { level } = spec
  const beam = createLaserBeam({
    x, y, forward, level
  })
  this.attach(beam)

  return this
}
