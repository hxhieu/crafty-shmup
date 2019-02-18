import { Events } from '@/constants'

const showHitBox = new WeakMap()
const hitbox = new WeakMap()

Crafty.c('Collider', {
  required: '2DExt, Collision',

  events: {
    [Events.TOGGLE_HITBOX]: function (show) {
      showHitBox.set(this, show)
      if (show) { this.addComponent('WiredHitBox') } else this.removeComponent('WiredHitBox')
    }
  },

  init: function () {
    // this.trigger(Events.TOGGLE_HITBOX, true)
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
    return this
  },

  getHitbox: function () {
    const { _w, _h } = this.pos()
    return hitbox.get(this) || { w: _w, h: _h }
  }
})
