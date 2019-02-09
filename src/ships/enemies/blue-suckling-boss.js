import '@/components/collider'

export class BlueSucklingBoss {
  constructor () {
    this._entity = Crafty.e(`Sprite_EnemyBoss02, Collider, CollisionProfileEnemy`)
    this._entity.attr({ x: 100, y: 20 })
  }
}
