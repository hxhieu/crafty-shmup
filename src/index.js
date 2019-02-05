import '../libs/crafty'
import { assets, generateSharedSprites } from './assets-loader'
import { Player } from './ships/player'

Crafty.paths({
  images: 'assets/'
})

Crafty.load(assets, () => {
  console.log('Assets loaded!')
  generateSharedSprites()
  Crafty.init(320, 240, document.getElementById('game')).background('#000')
  hello()
}, progress => {
  console.log(progress)
}, err => {
  console.error(err)
})

const hello = () => {
  const player = new Player(5)
  console.log(player)
}
