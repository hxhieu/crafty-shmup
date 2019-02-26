export default () => {
  Crafty.c('Sprite_ProjectileVulcan1', {
    init: function () {
      this.requires('Canvas, ProjectileVulcan1Sprite')
    }
  })

  Crafty.c('Sprite_ProjectileMulti1', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileMulti1Sprite')
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
        .reel('default', 250, [
          [8, 1, 1, 1],
          [9, 1, 1, 1],
          [10, 1, 1, 1],
          [11, 1, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectilePhoton1', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectilePhoton1Sprite')
        .reel('default', 250, [
          [15, 0, 1, 1],
          [16, 0, 1, 1]
        ])
        .animate('default', -1)
    }
  })

  Crafty.c('Sprite_ProjectileLaser1', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileLaser1Sprite')
        .reel('default', 250, [
          [3, 5, 1, 1],
          [4, 5, 1, 1],
          [5, 5, 1, 1],
          [6, 5, 1, 1]
        ])
        .attr({ h: 48 })
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ProjectileLaser2', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileLaser2Sprite')
        .reel('default', 350, [
          [8, 5, 1, 1],
          [9, 5, 1, 1],
          [10, 5, 1, 1],
          [11, 5, 1, 1]
        ])
        .attr({ h: 48 })
        .animate('default')
        .destroyOnEnd()
    }
  })

  Crafty.c('Sprite_ProjectileGreenAcid', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ProjectileGreenAcidSprite')
        .reel('default', 250, [
          [3, 0, 1, 1],
          [3, 8, 1, 1]
        ])
        .animate('default', -1)
    }
  })
}
