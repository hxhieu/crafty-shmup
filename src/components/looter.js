import { Events } from '@/constants'
// Local vars

// Component definition

Crafty.c('Looter', {
  events: {
    [Events.LOOT_ACQUIRED]: lootAcquired
  }
})

// Helpers

function lootAcquired (loot) {
  // TODO: Not sure what needs to be done here
  return this
}
