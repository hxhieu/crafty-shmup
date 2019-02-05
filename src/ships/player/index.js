import '../../components/move-to-mouse'
import '../../components/collider'

// import PhotonShell from '../../projectiles/photon-shell';

export class Player {
  constructor (speed) {
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mousedown', mouseDown)
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mouseup', mouseUp)
    this._entity = Crafty.e('Sprite_ShipHumanLargeSprite01, Collider, CollisionProfilePlayer, Fourway')
    const size = 32 * 1.5
    this._entity.attr({ w: size, h: size, x: (320 - size) / 2, y: (240 - size) / 2 })
    this._entity.fourway(200, { normalize: true })
    // this._entity.moveToMouse(speed)
    this._entity.bind('KeyDown', e => {
      if (e.key === Crafty.keys.ESC) {
        Crafty.stop(true)
        nw.App.closeAllWindows()
        // window.location.replace('../../../index.html')
      }
    })
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
