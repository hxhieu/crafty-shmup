import '../libs/crafty'
import './maths'
import { screen } from './sizes'
import { assets, generateSharedSprites } from './assets-loader'
import { Player } from '@/ships/player'

Crafty.paths({
  images: 'assets/'
})

Crafty.load(assets, () => {
  console.log('Assets loaded!')
  generateSharedSprites()
  Crafty.init(
    screen.w,
    screen.h,
    document.getElementById('game')
  ).background('#000')

  hello()
}, progress => {
  console.log(progress)
}, err => {
  console.error(err)
})

const hello = () => {
  const player = new Player(80)
  console.log(player)
}
