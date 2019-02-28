import '@/components/self-destroy'

const fx = new WeakMap()
const pow = new WeakMap()

Crafty.c('Projectile', {
  required: 'SelfDestroy',

  events: {
    HitOn
  },

  setProps: function (profile, power, effects) {
    const { sound, volume } = effects
    if (sound && !Crafty.audio.isPlaying(sound)) {
      Crafty.audio.play(sound, 1, volume || 1)
    }
    fx.set(this, effects)
    pow.set(this, power)
    this.addComponent(profile)
    return this
  }
})

function HitOn (hitData) {
  const { impact } = fx.get(this)
  if (impact) {
    const { ox, oy } = this
    Crafty.e(impact).attr({ ox, oy })
  }

  this.destroy()

  if (hitData && hitData.length > 0) {
    var other = hitData[0].obj
    if (other.has('Structure')) {
      other.takeDamage(pow.get(this))
    }
  }
}
