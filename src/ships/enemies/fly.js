import '@/components/random-start'
import '@/components/move-zig-zag'
import '@/components/weapon'
import { createEnemyBase } from './base'
import { createWeaponGeneric } from '@/weapons'
import { createGreenAcidProjectile as createProjectile } from '@/weapons/projectiles'

const MOVE_SPEED = 20

export const createEnemyFly = () => {
  const e = createEnemyBase('Sprite_EnemyFly')
    .addComponent('RandomStart, MoveZigZag')
    .setHitbox([14, 14, 14, 26, 26, 26, 26, 14])
    .setStructure(4, 0, { explode: 'Sprite_ExplosionEnemyFly' })
    .setRandomStart({ top: -64, bottom: -16 })
    .moveZigZag(12000, 3000, MOVE_SPEED)

  const { ox, oy } = e

  const w = createWeaponGeneric({ createProjectile, power: 1, rateOfFire: 0.5 })
    .lookDirection(e.getForward())
    .attr({ ox, oy })
  e.attach(w)

  setInterval(() => {
    e.safeAnimate('shooting', -1)
    e.setMoveSpeed(0)
    setTimeout(() => {
      e.safeAnimate('level', -1)
      w.startFire(false)
      e.setMoveSpeed(MOVE_SPEED)
    }, 1000)
  }, 4000)

  return e
}
