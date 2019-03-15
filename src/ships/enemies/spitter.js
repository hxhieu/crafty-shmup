import '@/components/move-to'
import '@/components/self-destroy'

import { createEnemyBase } from './base'
import { createWeaponGeneric } from '@/weapons'
import { createSpitterBile as createProjectile } from '@/weapons/projectiles'
import { getPlayerInstance } from '@/ships/player'

const MOVE_SPEED = 200

export const createEnemySpitter = ({ startX, startY, moveX, moveY }) => {
  const e = createEnemyBase('Sprite_EnemySpitter')
    .addComponent('Delay, MoveTo, SelfDestroy')
    .setHitbox(16)
    .setStructure(20, 0, { explode: 'Sprite_ExplosionEnemySpitter', sound: 'ExplosionSmall01', volume: 0.5 })
    .setScorePoint(25)

  e.attr({ x: startX, startY })
    .moveTo({ x: moveX, y: moveY, speed: MOVE_SPEED })

  const { ox, oy } = e

  const w = createWeaponGeneric({ createProjectile, power: 1 })
    .lookDirection(e.getForward())
    .setWeaponTracking(getPlayerInstance)
    .attr({ ox, oy })
  e.attach(w)

  // Fire after 2sec
  e.delay(() => {
    w.startFire(false)
    // Take off after 3sec
    e.delay(() => {
      e.moveTo({ x: e.x, y: -50, speed: MOVE_SPEED })
    }, 3000)
  }, 2000)

  return e
}
