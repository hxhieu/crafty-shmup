import '@/components/move-to-mouse'
import '@/components/collider'
import '@/components/four-way-bounded'
import { screen, unit } from '@/sizes'

// import PhotonShell from '../../projectiles/photon-shell';

export class Player {
  constructor (speed) {
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mousedown', mouseDown)
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mouseup', mouseUp)
    this._entity = Crafty.e('Sprite_PlayerGreen, Collider, CollisionProfilePlayer, FourwayBounded')
    const size = unit.w * 2
    this._entity.attr({ w: size, h: size, x: (screen.w - size) / 2, y: (screen.h - size) / 2 })
    this._entity.fourwayBounded(speed, screen)
    // this._entity.moveToMouse(speed)
    this._entity.bind('KeyDown', e => {
      if (e.key === Crafty.keys.ESC) {
        Crafty.stop(true)
        nw.App.closeAllWindows()
        // window.location.replace('../../../index.html')
      }
    })

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
// var _fireTimer;

// var mouseDown = function(e) {
//     fire();
//     _fireTimer = setInterval(function() {
//         fire();
//     }, 200);
// };

// var mouseUp = function(e) {
//     clearInterval(_fireTimer);
// };

// var fire = function() {
//     if (!_entity) return;
//     var bullet = new PhotonShell(10, _entity.forward(), 'Explosion01_Component', _entity);
// };
