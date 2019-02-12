import '@/components/collider'
import '@/components/structure'
import '@/components/death-sequence'

class EnemyBase {
  constructor (sprite) {
    this._entity = Crafty.e(`${sprite}, Collider, CollisionProfileEnemy, Structure`)
      .setStructure(1)
      .lookDirection(new Crafty.math.Vector2D(0, 1))
  }
}

class BossBase extends EnemyBase {
  constructor (sprite) {
    super(sprite)
    this._entity
      .addComponent('DeathSequence')
      .useDefaultBossDeathSequence()
  }
}

export {
  EnemyBase,
  BossBase
}
