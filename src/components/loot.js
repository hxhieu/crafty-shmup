import '@/components/kill-z'
import '@/components/sound-clip'

import { CollisionProfiles, Events } from '@/constants'

// Local vars
const checkInterval = 250
const data = new WeakMap()

// Component definition

Crafty.c('Loot', {
  required: `2DExt, ${CollisionProfiles.LOOT}, KillZ, Delay, SoundClip`,

  setLootData (loot) {
    data.set(this, loot)
    this.delay(() => {
      const hits = Crafty('Looter').get()
      for (let i = 0; i < hits.length; i++) {
        const other = hits[i]
        if (other.has('Looter') && this.intersect(other.pos())) {
          const effects = data.get(this)
          this.playSoundClip(effects)
          const { id, value } = data.get(this)
          other.trigger(Events.LOOT_ACQUIRED, { id, value })
          this.destroy()
        }
      }
    }, checkInterval, -1)
    return this
  }
})
