import './two-dee-ext'

let showHitBox = false

Crafty.c('Collider', {
  // Umm required Color for Canvas?...
  required: '2DExt, Color, Collision',

  getCentre: function () {
    return new Crafty.math.Vector2D(
      this.pos()._w / 2,
      this.pos()._h / 2
    )
  },

  getCentrePos: function () {
    var offset = this.getCentre()
    return new Crafty.math.Vector2D(
      offset.x / 2 + this.x,
      offset.y / 2 + this.y
    )
  },

  outOfScreen: function () {
    return !this.within(Crafty.viewport.rect())
  },

  toggleHitbox: function (show) {
    showHitBox = show
    if (showHitBox) { this.addComponent('WiredHitBox') } else this.removeComponent('WiredHitBox')
    return this
  }
})
