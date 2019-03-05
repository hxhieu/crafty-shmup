import '@/components/snake-follow'
// Local vars

// Component definition

Crafty.c('Multiple', {
  required: 'Sprite_PlayerGreen, Velocity, SnakeFollow',
  init: function () {
    this.alpha = 0.5
  }
})
