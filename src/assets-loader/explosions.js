export default () => {
  Crafty.c('Sprite_ExplosionSmall01', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ExplosionSmall01Sprite')
        .reel('default', 250, [
          [8, 0, 1, 1],
          [9, 0, 1, 1],
          [10, 0, 1, 1],
          [11, 0, 1, 1],
          [12, 0, 1, 1]
        ])
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ExplosionSmall01Slomo', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ExplosionSmall01Sprite')
        .reel('default', 1000, [
          [8, 0, 1, 1],
          [9, 0, 1, 1],
          [10, 0, 1, 1],
          [11, 0, 1, 1],
          [12, 0, 1, 1]
        ])
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ExplosionBossYellowCrab', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ExplosionBossYellowCrabSprite')
        .reel('default', 1000, [
          [0, 1, 1, 1],
          [1, 1, 1, 1],
          [2, 1, 1, 1],
          [3, 1, 1, 1],
          [4, 1, 1, 1]
        ])
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ExplosionBossBlueSuckling', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ExplosionBossBlueSucklingSprite')
        .reel('default', 1000, [
          [5, 1, 1, 1],
          [6, 1, 1, 1],
          [7, 1, 1, 1],
          [8, 1, 1, 1],
          [9, 1, 1, 1]
        ])
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ExplosionEnemyHost', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ExplosionEnemyPowerHostSprite')
        .reel('default', 250, [
          [10, 2, 1, 1],
          [11, 2, 1, 1],
          [12, 2, 1, 1],
          [13, 2, 1, 1],
          [14, 2, 1, 1]
        ])
        .animate('default')
        .destroyOnEnd()
    }
  })
}
