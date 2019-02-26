// import { createWeaponBase } from './base'

// export const createWeaponGeneric = ({createProjectile, }) => {
//   return createWeaponBase()
//     .setWeaponData(data, spawnFn)
// }

// function spawnFn (spec) {
//   const forward = this.getForward()
//   const { x, y } = this.getCentrePos()
//   const { level, power } = spec
//   const { way } = spec

//   spawnProjectile.call(this, { forward, x, y, level, power })
//   spawnProjectile.call(this, { forward: forward.rotateDeg(-30), x, y, level, power })
//   spawnProjectile.call(this, { forward: forward.rotateDeg(30), x, y, level, power })

//   if (way >= 5) {
//     spawnProjectile.call(this, { forward: forward.rotateDeg(-60), x, y, level, power })
//     spawnProjectile.call(this, { forward: forward.rotateDeg(60), x, y, level, power })
//   }

//   if (way >= 7) {
//     spawnProjectile.call(this, { forward: forward.rotateDeg(-90), x, y, level, power })
//     spawnProjectile.call(this, { forward: forward.rotateDeg(90), x, y, level, power })
//   }
// }

// function spawnProjectile ({ forward, x, y, level, power }) {
//   const profile = this._parent.collisionProfile
//   const size = 16
//   x -= size / 2
//   y -= size / 2
//   return createMultiProjectile({
//     x,
//     y,
//     forward,
//     profile,
//     level,
//     power
//   })
// }
