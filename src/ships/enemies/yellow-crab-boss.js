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
  RESET: 'resetState'
}

const DEFAULT_SPEED = 60
let fsm
let entity
let weapon
let relaxRound = 0

export const createYellowCrabBoss = () => {
  entity = createEnemyBossBase('Sprite_EnemyBossYellowCrab, MoveTo, Delay')
    .setStructure(1200, 0, 'Sprite_ExplosionBossYellowCrab')
    .setHitbox(40)
    .setAISubject('YELLOW_CRAB_BOSS')
    .bind(Events.MOVE_TO_ENDED, moveEnded)

  entity.x = (screenSize.w - entity.w) / 2
  entity.y = -70

  const { ox, oy } = entity

  weapon = createWeaponGeneric({ createProjectile, power: 3 })
    .lookDirection(entity.getForward())
    .attr({ ox, oy })
  entity.attach(weapon)

  // State machine
  fsm = new StateMachine({
    init: State.INTRO,
    transitions: [
      // { name: 'init', from: State.INTRO, to: State.RELAX },
      { name: 'relax', from: [State.INTRO, State.RESET], to: State.RELAX },
      { name: 'seek', from: State.RELAX, to: State.SEEK },
      { name: 'found', from: State.SEEK, to: State.FOUND },
      { name: 'charge', from: State.FOUND, to: State.CHARGE },
      { name: 'reset', from: State.CHARGE, to: State.RESET }
    ],
    methods: {
      onRelax,
      onSeek,
      onFound,
      onCharge,
      onReset
    }
  })

  entity.tell('starting the fight!')
  entity.moveTo({ x: entity.x, y: 30, speed: 10 })

  return entity
}

function moveEnded () {
  switch (fsm.state) {
    case State.INTRO:
      fsm.relax()
      break
    case State.RELAX:
    {
      if (relaxRound < 3) {
        relaxMove()
      } else {
        fsm.seek()
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
  entity.delay(() => {
    fsm.charge()
  }, 1500)
}

function onCharge () {
  entity.tell('charging at the player!')
  const speed = DEFAULT_SPEED * 4
  entity.moveTo({ x: entity.x, y: screenSize.h, speed })
}

function onReset () {
  entity.tell('reseting...')
  const speed = DEFAULT_SPEED * 0.5
  entity.safeAnimate('level', -1)
  entity.moveTo({ x: entity.x, y: 10, speed })
}

function onRelax () {
  relaxRound = 0
  relaxMove()
}

function relaxMove () {
  relaxRound++
  const speed = DEFAULT_SPEED
  const { w } = entity
  const { w: screenW } = screenSize
  const { w: hitBoxW } = entity.getHitbox()
  const goingRight = entity.x <= screenW / 2
  const y = -10
  const padding = (w - hitBoxW) / 2
  const x = goingRight ? screenW - (hitBoxW + padding) : -padding
  entity.moveTo({ x, y, speed })
  entity.tell(`relaxing...round ${relaxRound}`)
}

function seekMove () {
  const speed = DEFAULT_SPEED * 1.5
  const { ox: playerX, w: playerW } = getPlayerInstance()
  const { ox: x, y } = entity
  if (Math.abs(playerX - x) <= playerW) {
    fsm.found()
  } else {
    entity.tell(`still seeking...`)
    entity.moveTo({ x: playerX - (entity.w / 2), y, speed })
    entity.delay(seekMove, 250)
  }
}
