let impact

Crafty.c('Projectile', {
  required: 'Collision',

  events: {
    HitOn,
    HitOff
  },

  setProjectile: function (profile, impactEffect) {
    impact = impactEffect
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
    if (other.hasOwnProperty('structure')) { console.log(other) }
  }
}

function HitOff (component) {
  console.log(component)
}
