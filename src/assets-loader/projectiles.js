export default () => {
  Crafty.c('Sprite_ProjectileVulcan1', {
    init: function () {
      this.requires('Canvas, ProjectileVulcan1Sprite')
        .origin(8, 8)
    }
  })

  Crafty.c('Sprite_ProjectileMulti1', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileMulti1Sprite')
        .origin(8, 8)
        .reel('default', 250, [
          [3, 1, 1, 1],
          [4, 1, 1, 1],
          [5, 1, 1, 1],
          [6, 1, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectileMulti2', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileMulti2Sprite')
        .origin(8, 8)
        .reel('default', 250, [
          [8, 1, 1, 1],
          [9, 1, 1, 1],
          [10, 1, 1, 1],
          [11, 1, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectileLaser1', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileLaser1Sprite')
        .attr({ h: 48 })
        .origin(8, 24)
        .reel('default', 250, [
          [3, 5, 1, 1],
          [4, 5, 1, 1],
          [5, 5, 1, 1],
          [6, 5, 1, 1]
        ])

        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ProjectileLaser2', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileLaser2Sprite')
        .attr({ h: 48 })
        .origin(8, 24)
        .reel('default', 350, [
          [8, 5, 1, 1],
          [9, 5, 1, 1],
          [10, 5, 1, 1],
          [11, 5, 1, 1]
        ])

        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ProjectileGreenAcid', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileGreenAcidSprite')
        .attr({ w: 24, h: 24 })
        .origin(12, 12)
        .reel('default', 250, [
          [3, 0, 1, 1],
          [3, 8, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectileSpitterBile', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileSpitterBileSprite')
        .origin(8, 8)
        .reel('default', 250, [
          [3, 1, 1, 1],
          [4, 1, 1, 1],
          [5, 1, 1, 1],
          [6, 1, 1, 1],
          [7, 1, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectileCrabCub', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileCrabCubSprite')
        .attr({ w: 24, h: 24 })
        .origin(12, 12)
        .reel('default', 200, [
          [3, 4, 1, 1],
          [4, 4, 1, 1],
          [5, 4, 1, 1]
        ])
        .animate('default', -1)
    }
  })
}
