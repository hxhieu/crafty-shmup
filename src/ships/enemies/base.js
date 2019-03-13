import '@/components/structure'
import '@/components/death-sequence'
import '@/components/kill-z'
import '@/components/score'
import '@/components/ai'
import '@/gui/boss-bar'
import { CollisionProfiles } from '@/constants'

const createEnemyBase = (sprite, startupPhysics = true) => {
  const base = Crafty.e(`${sprite}, Collider, Structure, SolidHit, Score, AI`)
    .setStructure(1)
    .lookDirection(new Crafty.math.Vector2D(0, 1))
  if (startupPhysics) {
    base.addComponent(CollisionProfiles.ENEMY)
  }
  return base.setName(`${sprite}#${base.getId()}`)
}

const createEnemyBossBase = (sprite) => {
  // Bosses might not have physics when they start as because of intro sequence
  return createEnemyBase(sprite, false)
    .addComponent(`DeathSequence, BossBar`)
    .useDefaultBossDeathSequence()
}

export {
  createEnemyBase,
  createEnemyBossBase
}
