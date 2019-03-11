import { Events, CollisionProfiles } from '@/constants'
// Local vars

// Component definition

Crafty.c('Looter', {
  events: {
    [Events.LOOT_ACQUIRED]: lootAcquired
  }
})

// Helpers

function lootAcquired ({ id, value, score }) {
  if (this.collisionProfile === CollisionProfiles.PLAYER) {
    Crafty.trigger(Events.PLAYER_SCORE, score)
  }
  return this
}
