export default () => {
  Crafty.c('Sprite_ShipHumanLargeSprite01', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ShipHumanLargeSprite01')
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
      this.requires('Canvas, SpriteAnimationExt, PlayerRedSprite')
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
      this.requires('Canvas, SpriteAnimationExt, PlayerGreenSprite')
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
      this.requires('Canvas, SpriteAnimationExt, PlayerYellowSprite')
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
}
