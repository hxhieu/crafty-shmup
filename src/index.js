import '../libs/crafty'
import './utils/maths'

// Super common components
import '@/components/two-dee-ext'
import '@/components/collider'

import { Events } from '@/constants'
import { screenSize } from './device'
import { assets, generateSharedSprites } from './assets-loader'
import { GuiManager, createBossWarning } from '@/gui'
import { PhysicsManager } from '@/physics'
import { createPlayerFighterRed, createPlayerFighterGreen } from '@/ships/player'
import { ParallaxSpaceScene } from './scenes'
import { GenericSpawner } from '@/spawners'
import { createPowerHostSwarm, createEnemyFly } from '@/ships/enemies'
import { SpitterSpawner } from './spawners'
import { createYellowCrabBoss } from './ships/enemies/yellow-crab-boss'

window.debug = true

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

window.endStage = function () {
  // TODO: Post screen
  window.location.reload()
}

window.gameStart = function (progress, godmode, chosen) {
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

    /* eslint-disable no-new */
    const bg = new ParallaxSpaceScene()
    let player

    const life = godmode ? Number.MAX_SAFE_INTEGER : 1
    switch (chosen) {
      case 'RED': player = createPlayerFighterRed(life)
        break
      case 'GREEN': player = createPlayerFighterGreen(life)
        break
    }

    startSpawners()
    spawnBoss(bg, function () {
      const timer = Crafty.e('Delay')
      // Stage ends
      timer.delay(() => {
        player
          // Freeze the control
          .fourwayBounded(0, null)
          .multiway(0)
          // Get out of the stage
          .addComponent('MoveTo')
          .moveTo({ x: player.x, y: -100, speed: 200 })
          .bind(Events.MOVE_TO_ENDED, window.endStage)
      }, 5000)
    })
  }, progress)
}

function startSpawners () {
  const powerHostSpawner = new GenericSpawner(createPowerHostSwarm, 2000, 2000)
  powerHostSpawner.stop()

  const flySpawner = new GenericSpawner(createEnemyFly, 15000, 20000)
  flySpawner.stop()

  const spitterSpawner = new SpitterSpawner()
  spitterSpawner.stop()
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

function spawnBoss (bg, callback) {
  const warning = createBossWarning()
  bg.setActive(false)
  warning.bind('Remove', function () {
    createYellowCrabBoss().bind('Remove', function () {
      bg.setActive(true)
      if (typeof (callback) === 'function') {
        callback()
      }
    })
  })
}
