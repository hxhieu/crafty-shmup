const impact = new WeakMap()
const pow = new WeakMap()

Crafty.c('Projectile', {
  required: 'Collision',

  events: {
    HitOn,
    HitOff
  },

  setProjectile: function (profile, power, impactEffect) {
    impact.set(this, impactEffect)
    pow.set(this, power)
    this.addComponent(profile)
    return this
  }
})

function HitOn (hitData) {
  const impactEffect = impact.get(this)
  if (impactEffect) {
    Crafty.e(impactEffect)
      .attr({
        x: this.x,
        y: this.y
      })
  }

  this.destroy()

  if (hitData && hitData.length > 0) {
    var other = hitData[0].obj
    if (other.has('Structure')) {
      other.takeDamage(pow.get(this))
    }
  }
}

function HitOff (component) {
  console.log(component)
}
