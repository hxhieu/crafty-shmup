import '@/components/random-start'
import '@/components/move-zig-zag'
import '@/components/weapon'
import { createEnemyBase } from './base'
import { createWeaponGeneric } from '@/weapons'
import { createGreenAcidProjectile as createProjectile } from '@/weapons/projectiles'
import { getPlayerInstance } from '@/ships/player'

const MOVE_SPEED = 20
const FIRE_INTERVAL = 3000

export const createEnemyFly = () => {
  const e = createEnemyBase('Sprite_EnemyFly')
    .addComponent('RandomStart, MoveZigZag, Delay')
    .setHitbox(16)
    .setStructure(10, 0, { explode: 'Sprite_ExplosionEnemyFly' })
    .setScorePoint(100)
    .setRandomStart({ top: -64, bottom: -16 })
    .moveZigZag(12000, 3000, MOVE_SPEED)

  const { ox, oy } = e

  const w = createWeaponGeneric({ createProjectile, power: 1, rateOfFire: 0.5 })
    .lookDirection(e.getForward())
    .setWeaponTracking(getPlayerInstance)
    .attr({ ox, oy })
  e.attach(w)

  e.delay(() => {
    e.safeAnimate('shooting', -1)
    e.setMoveSpeed(0)
    e.delay(() => {
      e.safeAnimate('level', -1)
      w.startFire(false)
      e.setMoveSpeed(MOVE_SPEED)
    }, 1000)
  }, FIRE_INTERVAL, -1)

  return e
}
