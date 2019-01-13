import './two-dee-ext'
import { CollisionProfiles } from '../constants'

Crafty.c('Collider', {

  _showHitBox: false,

  init: function () {
    // Must have 2d coords
    // Umm required Color for Canvas?...
    this.requires('2DExt, Color, Collision')
  },

  centreOffset: function () {
    return {
      x: this.pos()._w / 2,
      y: this.pos()._h / 2
    }
  },

  centre: function () {
    var offset = this.centreOffset()
    return {
      x: offset.x + this.x,
      y: offset.y + this.y
    }
  },

  outOfScreen: function () {
    return !this.within(Crafty.viewport.rect())
  },

  toggleHitbox: function (show) {
    this._showHitBox = show

    if (show) { this.addComponent('WiredHitBox') } else this.removeComponent('WiredHitBox')

    return this
  }
})

/** * Collision Profiles ***/

Crafty.c('CollisionProfilePlayer', {
  init: function () {
    this.requires('Collision')
    this.checkHits('CollisionProfileEnemy, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.player
})

Crafty.c('CollisionProfileEnemy', {
  init: function () {
    this.requires('Collision')
    this.checkHits('CollisionProfilePlayer, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.enemy
})

Crafty.c('CollisionProfileSolid', {
  init: function () {
    this.requires('Collision')
    this.checkHits('CollisionProfileEnemy, CollisionProfilePlayer, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.solid
})
