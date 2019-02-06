export const assets = {
  sprites: {
    'SCHMUP_Player.png': {
      tile: 32,
      tileh: 32,
      map: {
        PlayerRedSprite: [5, 0, 1, 1],
        PlayerGreenSprite: [5, 1, 1, 1],
        PlayerYellowSprite: [5, 2, 1, 1]
      }
    },
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
          [5, 0, 1, 1],
          [6, 0, 1, 1]
        ])
        .reel('rotate', 150, [
          [0, 1.5, 2, 1.5],
          [2, 1.5, 2, 1.5]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_PlayerGreen', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, PlayerGreenSprite')
        .reel('level', 150, [
          [5, 1, 1, 1],
          [6, 1, 1, 1]
        ])
        .reel('rotate', 150, [
          [0, 1.5, 2, 1.5],
          [2, 1.5, 2, 1.5]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_PlayerYellow', {
    init: function () {
      this.requires('Canvas, SpriteAnimation, PlayerYellowSprite')
        .reel('level', 150, [
          [5, 2, 1, 1],
          [6, 2, 1, 1]
        ])
        .reel('rotate', 150, [
          [0, 1.5, 2, 1.5],
          [2, 1.5, 2, 1.5]
        ])
        .animate('level', -1)
    }
  })
}
