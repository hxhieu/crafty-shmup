import '../libs/crafty'
import './utils/maths'

// Super common components
import '@/components/two-dee-ext'
import '@/components/collider'

import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager } from '@/gui'
import { PhysicsManager } from '@/physics'
// import { createPlayerFighterRed } from '@/ships/player'
// import { createPlayerYellowFighter } from '@/ships/player'
import { createPlayerFighterGreen } from '@/ships/player'
import { ParallaxSpaceScene } from './scenes'
import { GenericSpawner } from '@/spawners'
import { createPowerHostSwarm, createEnemyFly } from '@/ships/enemies'
import { createYellowCrabBoss } from './ships/enemies/yellow-crab-boss'

Crafty.paths({
  images: 'assets/images/',
  audio: 'assets/audio/'
})

window.startGame = function (progress, godmode) {
  Crafty.load(assets, () => {
    generateSharedSprites()

    Crafty.init(
      screenSize.w,
      screenSize.h,
      document.getElementById('game')
    ).background('#000')
    Crafty.timer.FPS(60)
    Crafty.timer.steptype('variable')

    Crafty.createLayer('BGLayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 0 })
    Crafty.createLayer('BGStardust', 'Canvas', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 0 })
    Crafty.createLayer('UILayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 1000 })

    GuiManager.init()
    PhysicsManager.init()

    hello(godmode)
  }, progress)
}

function hello (godmode) {
  /* eslint-disable no-new */
  new ParallaxSpaceScene()

  const powerHostSpawner = new GenericSpawner(createPowerHostSwarm, 2000, 2000)
  powerHostSpawner.start()

  const flySpawner = new GenericSpawner(createEnemyFly, 5000, 5000)
  flySpawner.stop()

  createPlayerFighterGreen(godmode ? Number.MAX_SAFE_INTEGER : 1)

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
