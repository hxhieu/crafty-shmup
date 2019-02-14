import '@/components/structure'
import { CollisionProfiles, Events } from '@/constants'

Crafty.c('SolidHit', {
  required: 'Structure',

  events: {
    HitOn
  }
})

// Helpers

function HitOn (hitData) {
  const other = hitData[0].obj
  if (other.collisionProfile === CollisionProfiles.SOLID) {
    this.trigger(Events.TRIGGER_DESTROY)
  }
}
