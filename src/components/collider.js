import './two-dee-ext'

const showHitBox = new WeakMap()
const hitbox = new WeakMap()

Crafty.c('Collider', {
  // Umm required Color for Canvas?...
  required: '2DExt, Color, Collision',

  init: function () {
    this.origin('center')
    this.toggleHitbox(true)
  },

  getCentrePos: function () {
    const { ox, oy } = this
    return new Crafty.math.Vector2D(
      ox,
      oy
    )
  },

  outOfScreen: function () {
    return !this.within(Crafty.viewport.rect())
  },

  setHitbox: function (bounds) {
    this.collision(bounds)
    hitbox.set(this, {
      w: bounds[4] - bounds[0],
      h: bounds[3] - bounds[1]
    })
  },

  getHitbox: function () {
    const { _w, _h } = this.pos()
    return hitbox.get(this) || { w: _w, h: _h }
  },

  toggleHitbox: function (show) {
    showHitBox.set(this, show)
    if (show) { this.addComponent('WiredHitBox') } else this.removeComponent('WiredHitBox')
    return this
  }
})
