import '../libs/crafty'
import './utils/maths'

// Super common components
import '@/components/two-dee-ext'
import '@/components/collider'

import { Events } from '@/constants'
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
import { SpitterSpawner } from './spawners'
import { createYellowCrabBoss } from './ships/enemies/yellow-crab-boss'

Crafty.paths({
  images: 'assets/images/',
  audio: 'assets/audio/'
})

window.gameExit = function () {
  Crafty.stop(true)
  nw.App.closeAllWindows()
}

window.gameResume = function () {
  Crafty.pause()
  Crafty.trigger(Events.GAME_PAUSED, false)
  toggleMenu(false)
}

window.gamePause = function () {
  Crafty.pause()
  Crafty.trigger(Events.GAME_PAUSED, true)
  toggleMenu(true)
}

window.gameStart = function (progress, godmode) {
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

    GuiManager.init(godmode)
    PhysicsManager.init()

    hello(godmode)
  }, progress)
}

function hello (godmode) {
  /* eslint-disable no-new */
  new ParallaxSpaceScene()

  const powerHostSpawner = new GenericSpawner(createPowerHostSwarm, 2000, 2000)
  powerHostSpawner.start()

  const flySpawner = new GenericSpawner(createEnemyFly, 15000, 20000)
  flySpawner.stop()

  const spitterSpawner = new SpitterSpawner()
  spitterSpawner.start()

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

function toggleMenu (show) {
  const menu = document.getElementById('menu')
  const game = document.getElementById('game')

  // Clean up before adding
  menu.classList.remove('hide')
  menu.classList.remove('show')
  game.classList.remove('hide')
  game.classList.remove('show')

  if (show) {
    menu.classList.add('show')
    game.classList.add('hide')
    menu.focus()
  } else {
    menu.classList.add('hide')
    game.classList.add('show')
  }
}
