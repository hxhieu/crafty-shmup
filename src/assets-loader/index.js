import buildPlayer from './player-ships'
import buildEnemies from './enemy-ships'
import buildProjectiles from './projectiles'
import buildExplosions from './explosions'

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
        VulcanProjectileSprite1: [3, 0, 1, 1]
      }
    },

    // Enemy
    'Enemies_Unit.png': {
      tile: 32,
      tileh: 32,
      map: {
        EnemyBoss01Sprite: [0, 0, 1, 1],
        EnemyBoss02Sprite: [10, 0, 1, 1]
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
        ExplosionSmall01Sprite: [8, 0, 1, 1]
      }
    }
  }
}

const generateSharedSprites = () => {
  // Some helpers
  Crafty.c('SpriteAnimationExt', {
    required: 'SpriteAnimation',

    safeAnimate: function (reel, loop) {
      if (!this.isPlaying(reel)) this.animate(reel, loop)
      return this
    }
  })

  // Shared sprites
  buildPlayer()
  buildEnemies()
  buildProjectiles()
  buildExplosions()
}

export {
  assets,
  generateSharedSprites
}
