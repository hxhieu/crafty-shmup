export default () => {
  Crafty.c('Sprite_ObjectPowerUpGold', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ObjectPowerUpGoldSprite')
        .reel('default', 100, [
          [17, 0, 1, 1],
          [18, 0, 1, 1]
        ])
        .animate('default', -1)
        .attr({ w: 12, h: 12 })
    }
  })

  Crafty.c('Sprite_ObjectPowerUpSilver', {
    init: function () {
      this.requires('Canvas, SpriteAnimationExt, ObjectPowerUpSilverSprite')
        .reel('default', 100, [
          [19, 0, 1, 1],
          [20, 0, 1, 1]
        ])
        .animate('default', -1)
        .attr({ w: 12, h: 12 })
    }
  })
}
