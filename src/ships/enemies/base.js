import '@/components/structure'
import '@/components/death-sequence'
import '@/components/kill-z'
import { CollisionProfiles } from '@/constants'

const createEnemyBase = sprite => {
  return Crafty.e(`${sprite}, Collider, KillZ, ${CollisionProfiles.ENEMY}, Structure, SolidHit`)
    .setStructure(1)
    .lookDirection(new Crafty.math.Vector2D(0, 1))
}

const createEnemyBossBase = (sprite) => {
  const base = createEnemyBase(sprite)
    .addComponent(`DeathSequence`)
    .useDefaultBossDeathSequence()
  return base
}

export {
  createEnemyBase,
  createEnemyBossBase
}
