import '../libs/crafty'
import './utils/maths'
import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PhysicsManager } from '@/physics'
import { PlayerYellowFighter } from '@/ships/player'
import { YellowCrabBoss, BlueSucklingBoss } from '@/ships/enemies'
import { ParallaxSpaceScene } from './scenes'

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
  ).background('#fff')

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
  new ParallaxSpaceScene()
  new PlayerYellowFighter(80)
  for (let i = 0; i < 1; i++) {
    const boss1 = new YellowCrabBoss()
    boss1._entity.attr({
      x: Crafty.math.randomInt(0, screenSize.w),
      y: Crafty.math.randomInt(0, screenSize.h - 100)
    })
    console.log(boss1)
    const boss2 = new BlueSucklingBoss()
    boss2._entity.attr({
      x: Crafty.math.randomInt(0, screenSize.w),
      y: Crafty.math.randomInt(0, screenSize.h - 100)
    })
  }
}
