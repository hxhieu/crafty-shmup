const CollisionProfiles = {
  player: 'CollisionProfilePlayer',
  enemy: 'CollisionProfileEnemy',
  solid: 'CollisionProfileSolid'
}

class PhysicsManager {
  static init () {
    Crafty.c(CollisionProfiles.player, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.solid}, ${CollisionProfiles.enemy}`)
      },

      collisionProfile: CollisionProfiles.player
    })

    Crafty.c(CollisionProfiles.enemy, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.solid}, ${CollisionProfiles.player}`)
      },

      collisionProfile: CollisionProfiles.enemy
    })

    Crafty.c(CollisionProfiles.solid, {
      required: 'Collision',
      init: function () {
        this.checkHits(`${CollisionProfiles.solid}, ${CollisionProfiles.enemy}, ${CollisionProfiles.player}`)
      },

      collisionProfile: CollisionProfiles.solid
    })
  }
}

export {
  CollisionProfiles,
  PhysicsManager
}
