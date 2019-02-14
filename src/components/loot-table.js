import '@/components/collider'
import { Events } from '@/constants'

// Local vars

const lootTable = new WeakMap()

// Component definition

Crafty.c('LootTable', {
  required: 'Collider',

  events: {
    [Events.STRUCTURE_DESTROYED]: spawnLoot
  },

  setLootTable: function (table) {
    lootTable.set(this, table)
    return this
  }
})

function getLoot () {
  const table = lootTable.get(this)
  const chance = Crafty.math.randomNumber(0, 100)
  const possibilities = table.filter(loot => {
    return loot.chance >= chance
  })

  // Crude...just return one of the possiblities
  return possibilities[Crafty.math.randomInt(0, possibilities.length - 1)].Class
}

function spawnLoot () {
  const LootClass = getLoot.call(this)
  if (LootClass) {
    const loot = new LootClass()
    loot.setParent(this)
  }
}
