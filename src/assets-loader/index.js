import buildPlayer from './player-ships'
import buildEnemies from './enemy-ships'
import buildProjectiles from './projectiles'
import buildExplosions from './explosions'
import buildObjects from './objects'

const assets = {
  sprites: {
    // Player
    'Player_Unit.png': {
      tile: 32,
      tileh: 32,
      map: {
        PlayerRedSprite: [4, 0, 1, 1],
        PlayerGreenSprite: [4, 1, 1, 1],
        PlayerYellowSprite: [4, 2, 1, 1]
      }
    },
    'Player_Projectile.png': {
      tile: 16,
      tileh: 16,
      map: {
        ProjectileVulcan1Sprite: [3, 0, 1, 1]
      }
    },

    // Enemy
    'Enemies_Unit_Boss.png': {
      tile: 64,
      tileh: 64,
      map: {
        EnemyBoss01Sprite: [0, 0, 1, 1],
        EnemyBoss02Sprite: [5, 0, 1, 1],
        ExplosionBossYellowCrabSprite: [0, 1, 1, 1],
        ExplosionBossBlueSucklingSprite: [5, 1, 1, 1]
      }
    },
    'Enemies_Unit_Regular.png': {
      tile: 32,
      tileh: 32,
      map: {
        EnemyPowerHostSprite: [10, 3, 1, 1],
        ExplosionEnemyPowerHostSprite: [10, 2, 1, 1]
      }
    },

    // Scene
    'Parallax_Space_Sheet.png': {
      tile: 48,
      tileh: 48,
      map: {
        ParallaxSpaceBigPlanetSprite: [0, 0, 2, 2],
        ParallaxSpaceFarPlanetSprite: [2, 0, 1, 1],
        ParallaxSpaceStars1Sprite: [3, 0, 2, 2],
        ParallaxSpaceStars2Sprite: [5, 0, 2, 2]
      }
    },

    // Random
    'ships_human.png': {
      tile: 32,
      tileh: 32,
      map: {
        ShipHumanLargeSprite01: [0, 0, 2, 1.5]
      }
    },
    'space_pack.png': {
      tile: 16,
      tileh: 16,
      map: {
        ExplosionSmall01Sprite: [8, 0, 1, 1],
        ProjectilePhoton1Sprite: [15, 0, 1, 1],
        ObjectPowerUpGoldSprite: [17, 0, 1, 1],
        ObjectPowerUpSilverSprite: [17, 0, 1, 1]
      }
    }
  }
}

const generateSharedSprites = () => {
  // Some helpers
  Crafty.c('SpriteAnimationExt', {
    required: '2D, SpriteAnimation',

    init: function () {
      this.origin('center')
    },

    safeAnimate: function (reel, loop) {
      if (!this.isPlaying(reel)) this.animate(reel, loop)
      return this
    },

    destroyOnEnd: function () {
      this.bind('AnimationEnd', function () {
        this.destroy()
      })
      return this
    }
  })

  // Shared sprites
  buildPlayer()
  buildEnemies()
  buildProjectiles()
  buildExplosions()
  buildObjects()
}

export {
  assets,
  generateSharedSprites
}
