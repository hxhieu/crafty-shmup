import '@/components/collider'
import '@/components/structure'
import '@/components/death-sequence'

class EnemyBase {
  constructor (sprite) {
    this._entity = Crafty.e(`${sprite}, Collider, CollisionProfileEnemy, Structure`)
    this._entity.setStructure(1)
  }
}

class BossBase extends EnemyBase {
  constructor (sprite) {
    super(sprite)
    this._entity.addComponent('DeathSequence')
    this._entity.useDefaultBossDeathSequence()
  }
}

export {
  EnemyBase,
  BossBase
}
