import '../libs/crafty'
import './maths'
import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PhysicsManager } from '@/physics'
import { PlayerYellowFighter } from '@/ships/player'
import { YellowCrabBoss, BlueSucklingBoss } from '@/ships/enemies'

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
  PhysicsManager.init()

  hello()
}, progress => {
  console.log(progress)
}, err => {
  console.error(err)
})

function hello () {
  /* eslint-disable no-new */
  new PlayerYellowFighter(80)
  new YellowCrabBoss()
  new BlueSucklingBoss()
}
