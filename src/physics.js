import { CollisionProfiles } from './constants'

class PhysicsManager {
  static init () {
    Crafty.c(CollisionProfiles.PLAYER, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.ENEMY}, ${CollisionProfiles.SOLID}`)
      },

      collisionProfile: CollisionProfiles.PLAYER
    })

    Crafty.c(CollisionProfiles.ENEMY, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.PLAYER}, ${CollisionProfiles.SOLID}`)
      },

      collisionProfile: CollisionProfiles.ENEMY
    })

    Crafty.c(CollisionProfiles.SOLID, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.PLAYER}, ${CollisionProfiles.ENEMY}, ${CollisionProfiles.SOLID}`)
      },

      collisionProfile: CollisionProfiles.SOLID
    })

    Crafty.c(CollisionProfiles.LOOT, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.PLAYER}`)
      },

      collisionProfile: CollisionProfiles.LOOT
    })
  }
}

export {
  PhysicsManager
}
