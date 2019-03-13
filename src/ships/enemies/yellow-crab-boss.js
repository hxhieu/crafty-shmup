import '@/components/move-to'

import { createWeaponGeneric } from '@/weapons'
import { createCrabCubProjectile as createProjectile } from '@/weapons/projectiles'
import { createEnemyBossBase } from './base'
import { getPlayerInstance } from '@/ships/player'
import { screenSize } from '@/device'
import { Events } from '@/constants'
import StateMachine from 'javascript-state-machine'

const State = {
  INTRO: 'introState',
  RELAX: 'relaxState',
  SEEK: 'seekState',
  FOUND: 'foundState',
  CHARGE: 'chargeState',
  RESET: 'resetState',
  BERSERK: 'zerkerState'
}

const NAME = 'YELLOW_CRAB'
const DEFAULT_SPEED = 60
const CHARGE_DELAY = 1500
let fsm
let entity
let weapon
let relaxRound = 0
let relaxRoundMax = 3 // Will add random-ness

let zerkChargeCount = 0

export const createYellowCrabBoss = () => {
  entity = createEnemyBossBase('Sprite_EnemyBossYellowCrab, MoveTo, Delay')
    .setStructure(200, 0, 'Sprite_ExplosionBossYellowCrab')
    .setHitbox(40)
    .setAISubject(NAME)
    .setBossBar(NAME)
    .bind(Events.MOVE_TO_ENDED, moveEnded)

  entity.x = (screenSize.w - entity.w) / 2
  entity.y = -70

  resetWeapon()

  // State machine
  fsm = new StateMachine({
    init: State.INTRO,
    transitions: [
      { name: 'relax', from: [State.INTRO, State.RESET], to: State.RELAX },
      { name: 'berserk', from: State.RELAX, to: State.BERSERK },
      { name: 'seek', from: State.RELAX, to: State.SEEK },
      { name: 'found', from: State.SEEK, to: State.FOUND },
      { name: 'charge', from: State.FOUND, to: State.CHARGE },
      { name: 'reset',
        from: [
          State.SEEK,
          State.CHARGE,
          State.BERSERK
        ],
        to: State.RESET }
    ],
    methods: {
      onRelax,
      onSeek,
      onFound,
      onCharge,
      onReset,
      onBerserk
    }
  })

  entity.tell('starting the fight!')
  entity.moveTo({ x: entity.x, y: 30, speed: 10 })

  return entity
}

function isDead () {
  const { current } = entity.getArmour()
  return current <= 1
}

function getLifePercent () {
  const { current, max } = entity.getArmour()
  return (current / max) * 100
}

function resetWeapon () {
  if (weapon) {
    entity.detach(weapon)
    weapon.destroy()
  }
  const power = 2
  const rateOfFire = getLifePercent() >= 50 ? 1.25 : 1.5
  const { ox, oy } = entity

  weapon = createWeaponGeneric({ createProjectile, power, rateOfFire })
    .lookDirection(entity.getForward())
    .attr({ ox, oy })
  entity.attach(weapon)
}

function moveEnded () {
  switch (fsm.state) {
    case State.INTRO:
      fsm.relax()
      break
    case State.RELAX:
    {
      if (relaxRound < relaxRoundMax) {
        relaxMove()
      } else {
        let zerkChance = Crafty.math.randomInt(0, 30)
        // Low life will affect zerker chance
        const pct = getLifePercent()
        if (pct <= 33) {
          zerkChance *= 3
        }
        if (pct <= 50) {
          zerkChance *= 2
        }
        if (pct > 75) {
          zerkChance = 0
        }

        if (Crafty.math.randomInt(0, 100) <= zerkChance) {
          fsm.berserk()
        } else {
          fsm.seek()
        }
      }
      break
    }
    case State.BERSERK:
    {
      if (zerkChargeCount < 4) {
        zerkCharge()
      } else {
        fsm.reset()
      }
      break
    }
    case State.CHARGE:
      fsm.reset()
      break
    case State.RESET:
      fsm.relax()
      break
  }
}

function onSeek () {
  entity.tell('looking for the player')
  seekMove()
}

function onFound () {
  entity.tell(`locking on the player`)
  entity.safeAnimate('charging', -1)
  weapon.stopFire()
  entity.delay(() => {
    if (isDead()) return
    fsm.charge()
  }, CHARGE_DELAY)
}

function onCharge () {
  entity.tell('charging at the player!')
  const speed = DEFAULT_SPEED * 4
  entity.moveTo({ x: entity.x, y: screenSize.h, speed })
}

function onReset () {
  entity.tell('reseting...')
  resetWeapon()
  weapon.startFire()
  const speed = DEFAULT_SPEED * 0.5
  entity.safeAnimate('level', -1)
  entity.moveTo({ x: entity.x, y: 10, speed })
}

function onRelax () {
  relaxRound = 0
  weapon.startFire()
  // Life affects how "relax" I am
  const pct = getLifePercent()
  relaxRoundMax = pct >= 50 ? Crafty.math.randomInt(2, 4) : 2
  relaxMove()
}

function onBerserk () {
  entity.tell('super mad! RAWR!!!')
  zerkChargeCount = 0
  weapon.stopFire()
  zerkCharge()
}

function zerkCharge () {
  entity.tell('ramming the player')
  entity.safeAnimate('charging', -1)
  entity.delay(() => {
    if (isDead()) return
    zerkChargeCount++
    const speed = DEFAULT_SPEED * 5
    const player = getPlayerInstance()
    if (player) {
      const { ox: x, oy: y } = getPlayerInstance()
      entity.moveTo({ x: x - (entity.w / 2), y: y - (entity.h / 2), speed })
    } else {
      fsm.reset()
    }
  }, CHARGE_DELAY)
}

function relaxMove () {
  relaxRound++
  const speed = DEFAULT_SPEED
  const { w } = entity
  const { w: screenW } = screenSize
  const { w: hitBoxW } = entity.getHitbox()
  let goingRight = entity.x <= screenW / 2
  // First round should be total random
  if (relaxRound === 1) {
    goingRight = Crafty.math.randomInt(0, 100) >= 50
  }
  const y = Crafty.math.randomNumber(-20, 50)
  const padding = (w - hitBoxW) / 2
  const x = goingRight
    ? Crafty.math.randomNumber(3 * (screenW / 4), screenW - (hitBoxW + padding))
    : Crafty.math.randomNumber(-padding, screenW / 4)
  entity.moveTo({ x, y, speed })
  entity.tell(`relaxing...round ${relaxRound} of ${relaxRoundMax}`)
}

function seekMove () {
  const speed = DEFAULT_SPEED * 1.5
  // Work around for invalid transition to 'XXX' when 'seek' is still in progress
  // TODO: Any better way?
  const endSeek = tx => {
    if (fsm.can(tx)) {
      fsm[tx]()
    } else {
      entity.delay(() => {
        endSeek(tx)
      }, 100)
    }
  }

  const player = getPlayerInstance()
  if (!player) {
    endSeek('reset')
    return
  }
  const { ox: playerX, w: playerW } = player
  const { ox: x, y } = entity

  if (Math.abs(playerX - x) <= playerW) {
    endSeek('found')
  } else {
    entity.tell(`still seeking...`)
    entity.moveTo({ x: playerX - (entity.w / 2), y, speed })
    entity.delay(seekMove, 250)
  }
}
