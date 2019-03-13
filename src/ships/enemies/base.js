import '@/components/structure'
import '@/components/death-sequence'
import '@/components/kill-z'
import '@/components/score'
import '@/components/ai'
import '@/gui/boss-bar'
import { CollisionProfiles } from '@/constants'

const createEnemyBase = sprite => {
  const base = Crafty.e(`${sprite}, Collider, ${CollisionProfiles.ENEMY}, Structure, SolidHit, Score, AI`)
    .setStructure(1)
    .lookDirection(new Crafty.math.Vector2D(0, 1))
  return base.setName(`${sprite}#${base.getId()}`)
}

const createEnemyBossBase = (sprite) => {
  return createEnemyBase(sprite)
    .addComponent(`DeathSequence, BossBar`)
    .useDefaultBossDeathSequence()
}

export {
  createEnemyBase,
  createEnemyBossBase
}
