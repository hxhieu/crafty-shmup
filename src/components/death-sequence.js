const sequences = new WeakMap()

// Component definition

Crafty.c('DeathSequence', {
  required: 'Collider, Delay',

  setDeathSequence (seqs) {
    sequences.set(this, seqs)
    return this
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
    return this
  },

  activateDeathSequence () {
    return new Promise(resolve => {
      const seqs = sequences.get(this)
      let seqCount = 0
      seqs.forEach(seq => {
        const { effect, timeline, pos, size } = seq
        const { ox, oy } = this
        const { w, h } = this.getHitbox()
        const finalPos = pos ||
          {
            x: Crafty.math.randomInt(ox - size / 2 - w / 2, ox - size / 2 + w / 2),
            y: Crafty.math.randomInt(oy - size / 2 - h / 2, oy - size / 2 + h / 2)
          }
        this.delay(() => {
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
