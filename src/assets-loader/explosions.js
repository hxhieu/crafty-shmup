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
}
