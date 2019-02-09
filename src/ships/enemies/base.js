import '@/components/collider'
import '@/components/structure'

export class EnemyBase {
  constructor (sprite) {
    this._entity = Crafty.e(`${sprite}, Collider, CollisionProfileEnemy, Structure`)
    this._entity.setStructure(1)
  }
}
