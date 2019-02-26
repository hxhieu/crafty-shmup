import '@/components/structure'
import '@/components/death-sequence'
import '@/components/kill-z'
import { CollisionProfiles } from '@/constants'

const createEnemyBase = sprite => {
  const base = Crafty.e(`${sprite}, Collider, KillZ, ${CollisionProfiles.ENEMY}, Structure, SolidHit`)
    .setStructure(1)
    .lookDirection(new Crafty.math.Vector2D(0, 1))
  return base.setName(`${sprite}#${base.getId()}`)
}

const createEnemyBossBase = (sprite) => {
  return createEnemyBase(sprite)
    .addComponent(`DeathSequence`)
    .useDefaultBossDeathSequence()
}

export {
  createEnemyBase,
  createEnemyBossBase
}
