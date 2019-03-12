import '@/components/move-to'

import { createWeaponGeneric } from '@/weapons'
import { createCrabCubProjectile as createProjectile } from '@/weapons/projectiles'
import { createEnemyBossBase } from './base'
import { screenSize } from '@/device'

export const createYellowCrabBoss = () => {
  const e = createEnemyBossBase('Sprite_EnemyBossYellowCrab, MoveTo')
    .setStructure(1200, 0, 'Sprite_ExplosionBossYellowCrab')
    .setHitbox(40)

  e.x = (screenSize.w - e.w) / 2
  e.y = -70

  const { ox, oy } = e

  const w = createWeaponGeneric({ createProjectile, power: 3 })
    .lookDirection(e.getForward())
    .attr({ ox, oy })
  e.attach(w)

  // Intro
  e.moveTo({ x: e.x, y: 20, speed: 10 })

  // e.delay(() => {
  //   w.startFire(false)
  // }, 1000, -1)

  return e
}
