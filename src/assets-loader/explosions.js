export default () => {
  Crafty.c('Sprite_ExplosionSmall01', {
    init: function () {
      this.requires('Canvas, ExplosionSmall01Sprite')
        .reel('ExplosionSmall01Sprite', 150, [
          [8, 0, 1, 1],
          [9, 0, 1, 1],
          [10, 0, 1, 1],
          [11, 0, 1, 1],
          [12, 0, 1, 1]
        ])
        .animate('ExplosionSmall01Sprite')
    }
  })
}
