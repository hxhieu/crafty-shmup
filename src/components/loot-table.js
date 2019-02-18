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
  return possibilities[Crafty.math.randomInt(0, possibilities.length - 1)].create
}

function spawnLoot () {
  const createLoot = getLoot.call(this)
  const { x, y } = this.getCentrePos()
  if (createLoot) {
    createLoot().attr({ ox: x, oy: y })
  }
}
