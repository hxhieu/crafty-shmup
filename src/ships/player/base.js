import '@/components/collider'
import '@/components/four-way-bounded'
import '@/components/move-rotate'
import '@/components/structure'
import '@/components/looter'
import '@/components/solid-hit'
import './collision-check'
import './controller'
import { screenSize } from '@/device'
import { CollisionProfiles } from '@/constants'
import { WeaponMulti } from '@/components/weapons'

export class PlayerBase {
  constructor (speed) {
    const size = 32
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
    this._entity = Crafty.e(components)
      .attr({ w: size, h: size, x: (screenSize.w - size) / 2, y: screenSize.h - size })
      .fourwayBounded(speed, screenSize)
      .collision([8, 8, 8, 24, 24, 24, 24, 8])
      .setStructure(1, 0, { explode: 'Sprite_ExplosionEnemyHost', sound: 'ExplosionSmall01' })

    // this._entity.lookDirection(new Crafty.math.Vector2D(0, 1))

    this._entity.setWeapon(new WeaponMulti({
      forward: this._entity.getForward(),
      getPosition: this._entity.getCentrePos.bind(this._entity),
      profile: CollisionProfiles.PLAYER
    }))

    // var options = {
    //   maxParticles: 150,
    //   size: 18,
    //   sizeRandom: 4,
    //   speed: 1,
    //   speedRandom: 1.2,
    //   // Lifespan in frames
    //   lifeSpan: 29,
    //   lifeSpanRandom: 7,
    //   // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
    //   angle: 65,
    //   angleRandom: 34,
    //   startColour: [255, 131, 0, 1],
    //   startColourRandom: [48, 50, 45, 0],
    //   endColour: [245, 35, 0, 0],
    //   endColourRandom: [60, 60, 60, 0],
    //   // Only applies when fastMode is off, specifies how sharp the gradients are drawn
    //   sharpness: 20,
    //   sharpnessRandom: 10,
    //   // Random spread from origin
    //   spread: 10,
    //   // How many frames should this last
    //   duration: -1,
    //   // Will draw squares instead of circle gradients
    //   fastMode: false,
    //   gravity: { x: 0, y: 0.1 },
    //   // sensible values are 0-3
    //   jitter: 0,
    //   // Offset for the origin of the particles
    //   originOffset: { x: 0, y: 0, w: screen.w, h: screen.h }
    // }

    // Crafty.e('2D, Canvas, Particles')
    //   .attr({ w: screen.w, h: screen.h })
    // // debug entity's bounds while developing
    // // make sure particles fit into entity's bounds
    //   .addComponent('WiredMBR')
    // // init particle animation
    //   .particles(options)
  }
}
