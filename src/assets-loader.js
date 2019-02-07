export const assets = {
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

      }
    }
  }
}

export const generateSharedSprites = () => {
  // Some helpers
  // Crafty.c('SpriteAnimationExt', {
  //   init: function () {
  //     this.requires('SpriteAnimation')
  //   },

  //   animate2: function (reel, loop) {
  //     console.log('new')
  //     if (!this.isPlaying(reel)) this.animate(reel, loop)
  //     return this
  //   }
  // })

  // Shared sprites
  Crafty.c('Sprite_ShipHumanLargeSprite01', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, ShipHumanLargeSprite01')
        .reel('level', 150, [
          [0, 0, 2, 1.5],
          [2, 0, 2, 1.5]
        ])
        .reel('rotate', 150, [
          [0, 1.5, 2, 1.5],
          [2, 1.5, 2, 1.5]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_PlayerRed', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, PlayerRedSprite')
        .reel('level', 150, [
          [4, 0, 1, 1],
          [5, 0, 1, 1]
        ])
        .reel('rotateLeft', 150, [
          [3, 0, 1, 1]
        ])
        .reel('rotateRight', 150, [
          [1, 0, 1, 1]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_PlayerGreen', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, PlayerGreenSprite')
        .reel('level', 150, [
          [4, 1, 1, 1],
          [5, 1, 1, 1]
        ])
        .reel('rotateLeft', 150, [
          [3, 1, 1, 1]
        ])
        .reel('rotateRight', 150, [
          [1, 1, 1, 1]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_PlayerYellow', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, PlayerYellowSprite')
        .reel('level', 150, [
          [4, 2, 1, 1],
          [5, 2, 1, 1]
        ])
        .reel('rotateLeft', 150, [
          [3, 2, 1, 1]
        ])
        .reel('rotateRight', 150, [
          [1, 2, 1, 1]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_EnemyBoss01', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, EnemyBoss01Sprite')
        .reel('default', 750, [
          [1, 0, 1, 1],
          [0, 0, 1, 1],
          [2, 0, 1, 1],
          [3, 0, 1, 1]
        ])
        // .reel('explode', 500, [
        //   [0, 0.5, 1, 1],
        //   [1, 0.5, 1, 1],
        //   [2, 0.5, 1, 1],
        //   [3, 0.5, 1, 1],
        //   [4, 0.5, 1, 1]
        // ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_EnemyBoss02', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, EnemyBoss02Sprite')
        .reel('default', 750, [
          [10, 0, 1, 1],
          [11, 0, 1, 1],
          [12, 0, 1, 1],
          [13, 0, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_VulcanProjectile1', {
    init: function () {
      this.requires('Canvas, VulcanProjectileSprite1')
    }
  })
}
