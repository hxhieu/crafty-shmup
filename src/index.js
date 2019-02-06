import '../libs/crafty'
import './maths'
import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PlayerYellowFighter } from '@/ships/player'

Crafty.paths({
  images: 'assets/'
})

Crafty.load(assets, () => {
  console.log('Assets loaded!')
  generateSharedSprites()
  Crafty.init(
    screenSize.w,
    screenSize.h,
    document.getElementById('game')
  ).background('#000')

  GuiManager.init()

  hello()
}, progress => {
  console.log(progress)
}, err => {
  console.error(err)
})

function hello () {
  const player = new PlayerYellowFighter(80)
  console.log(player)
}
