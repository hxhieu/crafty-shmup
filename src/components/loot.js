import '@/components/kill-z'
import '@/components/two-dee-ext'
import { CollisionProfiles, Events } from '@/constants'

// Local vars

const data = new WeakMap()

// Component definition

Crafty.c('Loot', {
  required: `2DExt, ${CollisionProfiles.LOOT}, KillZ`,

  setLootData (loot) {
    data.set(this, loot)
    return this
  },

  events: {
    HitOn,
    HitOff
  }
})

// Helpers

function giveLoot (other) {
  const { sound, id, value } = data.get(this)
  if (sound) {
    Crafty.audio.play(sound)
  }
  other.trigger(Events.LOOT_ACQUIRED, { id, value })
  this.destroy()
}

function HitOn (hitData) {
  const other = hitData[0].obj
  if (other && other.has('Looter')) {
    giveLoot.call(this, other)
  }
}

function HitOff (profile) {
  const hits = Crafty(profile).get()
  for (let i = 0; i < hits.length; i++) {
    const other = hits[i]
    if (other.has('Looter') && this.intersect(other.pos())) {
      giveLoot.call(this, other)
    }
  }
}
