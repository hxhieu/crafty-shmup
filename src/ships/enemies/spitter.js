import '@/components/weapon'
import '@/components/move-to'
import { screenSize } from '@/device'

import { createEnemyBase } from './base'
import { createWeaponGeneric } from '@/weapons'
import { createSpitterBile as createProjectile } from '@/weapons/projectiles'
import { getPlayerInstance } from '@/ships/player'

const MOVE_SPEED = 160

export const createEnemySpitter = ({ moveX, moveY }) => {
  const e = createEnemyBase('Sprite_EnemySpitter')
    .addComponent('Delay, MoveTo')
    .setHitbox([14, 14, 14, 26, 26, 26, 26, 14])
    .setStructure(10, 0, { explode: 'Sprite_ExplosionEnemySpitter' })
    .setScorePoint(25)

  e.attr({ x: (screenSize.w - e.w) / 2, y: -150 })
    .moveTo({ x: moveX, y: moveY, speed: MOVE_SPEED })

  const { ox, oy } = e

  const w = createWeaponGeneric({ createProjectile, power: 1, rateOfFire: 0.5 })
    .lookDirection(e.getForward())
    .setWeaponTracking(getPlayerInstance)
    .attr({ ox, oy })
  e.attach(w)

  e.delay(() => {
    w.startFire(false)
  }, 3000)

  return e
}
