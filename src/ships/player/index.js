import '../../components/move-to-mouse'
import '../../components/collider'

// import PhotonShell from '../../projectiles/photon-shell';

export class Player {
  constructor (speed) {
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mousedown', mouseDown)
    //   Crafty.addEvent(_entity, Crafty.stage.elem, 'mouseup', mouseUp)
    this._entity = Crafty.e('Sprite_ShipHumanLargeSprite01, Collider, CollisionProfilePlayer, MoveToMouse, Fourway')
    this._entity.fourway(200, { normalize: true })
    this._entity.moveToMouse(speed)
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
