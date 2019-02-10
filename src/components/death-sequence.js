import '@/components/collider'

const sequences = new WeakMap()

// Component definition

Crafty.c('DeathSequence', {
  required: 'Collider',

  setDeathSequence (seqs) {
    sequences.set(this, seqs)
  },

  useDefaultBossDeathSequence () {
    this.setDeathSequence([
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 0, size: 16 },
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 700, size: 16 },
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 1500, size: 16 },
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 2400, size: 16 },
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 1200, size: 16 },
      { effect: 'Sprite_ExplosionSmall01Slomo', timeline: 900, size: 16 }
    ])
  },

  activateDeathSequence () {
    return new Promise(resolve => {
      const seqs = sequences.get(this)
      let seqCount = 0
      seqs.forEach(seq => {
        const { effect, timeline, pos, size } = seq
        const { x, y } = this.getCentrePos()
        const { w, h } = this.getHitbox()
        const finalPos = pos ||
          {
            x: Crafty.math.randomInt(x - size / 2 - w / 2, x - size / 2 + w / 2),
            y: Crafty.math.randomInt(y - size / 2 - h / 2, y - size / 2 + h / 2)
          }
        setTimeout(() => {
          Crafty.e(effect).attr({ x: finalPos.x, y: finalPos.y })
          seqCount++
          if (seqCount === seqs.length) {
            resolve(this)
          }
        }, timeline)
      })
    })
  }
})
