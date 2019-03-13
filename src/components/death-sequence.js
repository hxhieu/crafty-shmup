import '@/components/sound-clip'

const sequences = new WeakMap()

// Component definition

Crafty.c('DeathSequence', {
  required: 'Collider, Delay, SoundClip',

  setDeathSequence (seqs) {
    sequences.set(this, seqs)
    return this
  },

  useDefaultBossDeathSequence () {
    const sequence = []
    for (let i = 0; i < 30; i++) {
      const rand = Crafty.math.randomInt(100, 500)
      sequence.push(
        { effect: 'Sprite_ExplosionSmall01Slomo', sound: 'ExplosionSmall01', timeline: i * rand, size: 16 }
      )
    }
    this.setDeathSequence(sequence)
    return this
  },

  activateDeathSequence () {
    return new Promise(resolve => {
      const seqs = sequences.get(this)
      let seqCount = 0
      seqs.forEach(seq => {
        const { effect, sound, volume, timeline, pos, size } = seq
        const { ox, oy } = this
        const { w, h } = this.getHitbox()
        const finalPos = pos ||
          {
            x: Crafty.math.randomInt(ox - size / 2 - w / 2, ox - size / 2 + w / 2),
            y: Crafty.math.randomInt(oy - size / 2 - h / 2, oy - size / 2 + h / 2)
          }
        this.delay(() => {
          Crafty.e(effect).attr({ x: finalPos.x, y: finalPos.y })
          this.playSoundClip({ sound, volume })
          seqCount++
          if (seqCount === seqs.length) {
            resolve(this)
          }
        }, timeline)
      })
    })
  }
})
