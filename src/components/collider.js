import './two-dee-ext'
import { CollisionProfiles } from '../constants'

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
      offset.x + this.x,
      offset.y + this.y
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

/** * Collision Profiles ***/

Crafty.c('CollisionProfilePlayer', {
  required: 'Collision',
  init: function () {
    this.checkHits('CollisionProfileEnemy, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.player
})

Crafty.c('CollisionProfileEnemy', {
  required: 'Collision',
  init: function () {
    this.checkHits('CollisionProfilePlayer, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.enemy
})

Crafty.c('CollisionProfileSolid', {
  required: 'Collision',
  init: function () {
    this.checkHits('CollisionProfileEnemy, CollisionProfilePlayer, CollisionProfileSolid')
  },

  collisionProfile: CollisionProfiles.solid
})
