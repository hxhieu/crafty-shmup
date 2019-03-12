import { Events, CollisionProfiles } from '@/constants'

// Local vars

// Component definition

Crafty.c('PlayerCollision', {
  required: 'Collision, Structure',

  events: {
    HitOn
  }
})

// Helpers

function HitOn (hitData) {
  // God-mode, ignore collision
  if (this.getStructurePoints() >= 100) {
    return
  }

  const other = hitData[0].obj
  if (other.collisionProfile !== CollisionProfiles.ENEMY) {
    return
  }

  if (other.has('Structure')) {
    const otherStructure = other.getStructurePoints()
    const structure = this.getStructurePoints()
    if (structure >= otherStructure) {
      other.trigger(Events.TRIGGER_DESTROY)
    }

    // Take the damage equal to the total structure of other
    this.takeDamage(otherStructure)
  }
}
