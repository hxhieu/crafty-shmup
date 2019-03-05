import '@/components/four-way-bounded'
import '@/components/move-rotate'
import '@/components/structure'
import '@/components/looter'
import '@/components/solid-hit'
import './player-collision'
import './player-controller'
import { screenSize } from '@/device'
import { CollisionProfiles } from '@/constants'

export const createPlayerBase = speed => {
  const components =
      `Collider,\
      ${CollisionProfiles.PLAYER},\
      FourwayBounded,\
      MoveRotate,\
      Structure,\
      SolidHit,\
      PlayerCollision,\
      PlayerController,\
      Looter`
  const size = 32
  return Crafty.e(components)
    .attr({ x: (screenSize.w - size) / 2, y: screenSize.h - size })
    .fourwayBounded(speed, screenSize)
    .setHitbox([12, 12, 12, 20, 20, 20, 20, 12])
    .setStructure(1, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01' })
}
