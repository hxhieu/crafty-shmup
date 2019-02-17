import '@/components/kill-z'
import { CollisionProfiles, Events } from '@/constants'

// Local vars
const checkInterval = 250
const data = new WeakMap()
const timer = new WeakMap()

// Component definition

Crafty.c('Loot', {
  required: `2DExt, ${CollisionProfiles.LOOT}, KillZ`,

  setLootData (loot) {
    data.set(this, loot)
    timer.set(this, setInterval(() => {
      const hits = Crafty('Looter').get()
      for (let i = 0; i < hits.length; i++) {
        const other = hits[i]
        if (other.has('Looter') && this.intersect(other.pos())) {
          const { sound, id, value, volume } = data.get(this)
          if (sound) {
            Crafty.audio.play(sound, 1, volume || 1)
          }
          other.trigger(Events.LOOT_ACQUIRED, { id, value })
          this.destroy()
        }
      }
    }, checkInterval))
    return this
  },

  setLootParent (parent) {
    const { x, y } = parent.getCentrePos()
    this.attr({ x: x + this.w / 2, y: y + this.h / 2 })
    return this
  },

  events: {
    Remove: function () {
      clearInterval(timer.get(this))
    }
  }
})
