import '@/components/move-forward'
import '@/components/two-dee-ext'

export class ObjectPowerUp {
  constructor () {
    this._entity = Crafty.e(`2DExt, Collider, Sprite_ObjectPowerUpGold, MoveForward`)
      .lookDirection(new Crafty.math.Vector2D(0, 1))
      .moveForward(20)
  }

  setPosition ({ x, y }) {
    this._entity.attr({ x, y })
  }
}
