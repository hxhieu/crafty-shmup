import '@/components/structure'
import '@/components/death-sequence'
import { CollisionProfiles } from '@/constants'

class EnemyBase {
  constructor (sprite) {
    this.e = Crafty.e(`${sprite}, Collider, ${CollisionProfiles.ENEMY}, Structure, SolidHit`)
      .setStructure(1)
      .lookDirection(new Crafty.math.Vector2D(0, 1))
  }
}

class BossBase extends EnemyBase {
  constructor (sprite) {
    super(sprite)
    this.e
      .addComponent(`DeathSequence`)
      .useDefaultBossDeathSequence()
  }
}

export {
  EnemyBase,
  BossBase
}
