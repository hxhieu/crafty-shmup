import { createWeaponBase } from './base'

export const createWeaponGeneric = ({ createProjectile, power, rateOfFire }) => {
  return createWeaponBase()
    .setWeaponData([{ power, rateOfFire }],
      function () {
        const forward = this.getForward()
        const profile = this._parent.collisionProfile
        let { ox, oy } = this

        return createProjectile({
          forward,
          profile,
          power
        }).attr({ ox, oy })
      })
}
