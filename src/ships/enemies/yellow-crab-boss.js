import '@/components/collider'

export class YellowCrabBoss {
  constructor () {
    this._entity = Crafty.e(`Sprite_EnemyBoss01, Collider, CollisionProfileEnemy`)
    this._entity.attr({ x: 160, y: 20 })
  }
}
