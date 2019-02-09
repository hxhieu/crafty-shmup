let impact
let pow

Crafty.c('Projectile', {
  required: 'Collision',

  events: {
    HitOn,
    HitOff
  },

  setProjectile: function (profile, power, impactEffect) {
    impact = impactEffect
    pow = power
    this.addComponent(profile)
    return this
  }
})

function HitOn (hitData) {
  if (impact) {
    Crafty.e(impact)
      .attr({
        x: this.x,
        y: this.y
      })
  }

  this.destroy()

  if (hitData && hitData.length > 0) {
    var other = hitData[0].obj
    if (other.has('Structure')) {
      other.takeDamage(pow)
    }
  }
}

function HitOff (component) {
  console.log(component)
}
