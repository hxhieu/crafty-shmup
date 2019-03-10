export default () => {
  Crafty.c('Sprite_EnemyBoss01', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, EnemyBoss01Sprite')
        .origin(32, 32)
        .reel('level', 750, [
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
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_EnemyBoss02', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, EnemyBoss02Sprite')
        .origin(32, 32)
        .reel('level', 750, [
          [5, 0, 1, 1],
          [6, 0, 1, 1],
          [7, 0, 1, 1],
          [8, 0, 1, 1]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_EnemyPowerHost', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, EnemyPowerHostSprite')
        .attr({ w: 24, h: 24 })
        .origin(12, 12)
        .reel('level', 250, [
          [10, 3, 1, 1],
          [11, 3, 1, 1],
          [12, 3, 1, 1],
          [13, 3, 1, 1]
        ])
        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_EnemyFly', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, EnemyFlySprite')
        .attr({ w: 48, h: 48 })
        .origin(24, 24)
        .reel('level', 500, [
          [0, 1, 1, 1],
          [1, 1, 1, 1],
          [2, 1, 1, 1],
          [3, 1, 1, 1]
        ])
        .reel('shooting', 250, [
          [0, 1, 1, 1],
          [1, 1, 1, 1],
          [2, 1, 1, 1],
          [3, 1, 1, 1]
        ])

        .animate('level', -1)
    }
  })

  Crafty.c('Sprite_EnemySpitter', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, EnemySpitterSprite')
        .attr({ w: 32, h: 32 })
        .origin(16, 16)
        .reel('level', 250, [
          [0, 3, 1, 1],
          [1, 3, 1, 1],
          [2, 3, 1, 1],
          [3, 3, 1, 1]
        ])

        .animate('level', -1)
    }
  })
}
