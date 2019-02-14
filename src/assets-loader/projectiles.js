export default () => {
  Crafty.c('Sprite_ProjectileVulcan1', {
    init: function () {
      this.requires('Canvas, ProjectileVulcan1Sprite')
    }
  })

  Crafty.c('Sprite_ProjectileMulti1', {
    init: function () {
      this.requires('Canvas, ProjectileMulti1Sprite')
    }
  })

  Crafty.c('Sprite_ProjectileMulti2', {
    init: function () {
      this.requires('Canvas, ProjectileMulti2Sprite')
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
}
