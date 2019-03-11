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
    this.trigger(Events.TOGGLE_HITBOX, true)
  },

  outOfScreen: function () {
    return !this.within(Crafty.viewport.rect())
  },

  setHitbox: function (w, h) {
    const { w: spriteW, h: spriteH } = this
    h = h || w
    const topLeft = {
      x: (spriteW - w) / 2,
      y: (spriteH - h) / 2
    }
    const topRight = {
      x: (spriteW + w) / 2,
      y: (spriteH - h) / 2
    }
    const bottomLeft = {
      x: (spriteW - w) / 2,
      y: (spriteH + h) / 2
    }
    const bottomRight = {
      x: (spriteW + w) / 2,
      y: (spriteH + h) / 2
    }
    this.collision(
      topLeft.x,
      topLeft.y,
      topRight.x,
      topRight.y,
      bottomRight.x,
      bottomRight.y,
      bottomLeft.x,
      bottomLeft.y
    )
    hitbox.set(this, { w, h })
    return this
  },

  getHitbox: function () {
    const { _w, _h } = this.pos()
    return hitbox.get(this) || { w: _w, h: _h }
  }
})
