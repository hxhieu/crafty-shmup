import '../libs/crafty'
import './utils/maths'

// Super common components
import '@/components/two-dee-ext'
import '@/components/collider'

import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PhysicsManager } from '@/physics'
import { createPlayerRedFighter } from '@/ships/player'
import { ParallaxSpaceScene } from './scenes'
import { GenericSpawner } from '@/spawners'
import { createEnemyPowerHost } from '@/ships/enemies'
import { createYellowCrabBoss } from './ships/enemies/yellow-crab-boss'

Crafty.paths({
  images: 'assets/images/',
  audio: 'assets/audio/'
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
  new ParallaxSpaceScene()

  const powerHostSpawner = new GenericSpawner(createEnemyPowerHost, 2000, 6000)
  powerHostSpawner.start()

  createPlayerRedFighter(80)

  const boss1 = createYellowCrabBoss()
  boss1.attr({
    x: Crafty.math.randomInt(0, screenSize.w),
    y: Crafty.math.randomInt(0, screenSize.h - 200)
  })
  // const boss2 = new BlueSucklingBoss()
  // boss2.e.attr({
  //   x: Crafty.math.randomInt(0, screenSize.w),
  //   y: Crafty.math.randomInt(0, screenSize.h - 100)
  // })
}
