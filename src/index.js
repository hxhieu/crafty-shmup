import '../libs/crafty'
import './utils/maths'

// Super common components
import '@/components/two-dee-ext'
import '@/components/collider'

import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PhysicsManager } from '@/physics'
// import { createPlayerRedFighter } from '@/ships/player'
// import { createPlayerYellowFighter } from '@/ships/player'
import { createPlayerGreenFighter } from '@/ships/player'
import { ParallaxSpaceScene } from './scenes'
import { GenericSpawner } from '@/spawners'
import { createPowerHostSwarm, createEnemyFly } from '@/ships/enemies'
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
  Crafty.timer.FPS(60)
  Crafty.timer.steptype('variable')

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

  const powerHostSpawner = new GenericSpawner(createPowerHostSwarm, 6000, 8000)
  powerHostSpawner.stop()

  const flySpawner = new GenericSpawner(createEnemyFly, 5000, 5000)
  flySpawner.stop()

  createPlayerGreenFighter(80)

  createYellowCrabBoss().attr({
    x: 100,
    y: 20
  })

  // createYellowCrabBoss().attr({
  //   x: 100,
  //   y: 50
  // })
  // const boss2 = new BlueSucklingBoss()
  // boss2.e.attr({
  //   x: Crafty.math.randomInt(0, screenSize.w),
  //   y: Crafty.math.randomInt(0, screenSize.h - 100)
  // })
}
