import '@/components/move-rotate'
import '@/components/structure'
import '@/components/looter'
import '@/components/solid-hit'
import './player-collision'
import './player-controller'
import { screenSize } from '@/device'
import { CollisionProfiles } from '@/constants'

const SPRITE_SIZE = 32

export const createPlayerBase = initHp => {
  const components =
    `Collider,\
    ${CollisionProfiles.PLAYER},\
    MoveRotate,\
    Structure,\
    SolidHit,\
    PlayerCollision,\
    PlayerController,\
    Looter`
  return Crafty.e(components)
    .attr({ w: SPRITE_SIZE, h: SPRITE_SIZE, x: (screenSize.w - SPRITE_SIZE) / 2, y: screenSize.h - SPRITE_SIZE })
    .setHitbox(8)
    .setStructure(initHp, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01' })
}
