import throttle from 'lodash.throttle'
import { keypad } from '@/device'

// Local vars
const fireTimer = new WeakMap()
const throttleFire = new WeakMap()

// Component definition

Crafty.c('PlayerController', {
  // required: 'XXX',

  events: {
    EnterFrame,
    KeyDown,
    KeyUp
  },

  init: function () {

  },

  setWeaponOptions: function (options) {
    let defaultOptions = {
      waveCount: 2,
      perSecond: 2
    }

    defaultOptions = Object.assign(defaultOptions, options)

    const { ProjectileClass, waveCount, perSecond } = defaultOptions
    this.weaponOptions = { ProjectileClass, waveCount, perSecond }
    throttleFire.set(this, throttle(fire.bind(this), 1000 / perSecond, { trailing: false }))

    return this
  },
  startFire,
  stopFire
})

// Helpers

function EnterFrame () {

}

function spawnProjectiles ({ x, y, collisionProfile, ProjectileClass }) {
  // const forward = this.getForward()
  // console.log(forward)
  /* eslint-disable no-new */
  new ProjectileClass({
    x: x - 4,
    y: y - 16,
    forward: new Crafty.math.Vector2D(0, -1),
    profile: collisionProfile
  })

  new ProjectileClass({
    x: x - 12,
    y: y - 16,
    forward: new Crafty.math.Vector2D(0, -1),
    profile: collisionProfile
  })

  // new ProjectileClass({
  //   x,
  //   y,
  //   forward: new Crafty.math.Vector2D(-1, -1)
  // })

  // new ProjectileClass({
  //   x,
  //   y,
  //   forward: new Crafty.math.Vector2D(1, -1)
  // })
}

function fire () {
  const { x, y } = this.getCentrePos()
  const { collisionProfile } = this
  const { ProjectileClass, waveCount } = this.weaponOptions
  spawnProjectiles({ x, y, collisionProfile, ProjectileClass })
  // Waves
  for (let i = 1; i < waveCount; i++) {
    setTimeout(() => {
      spawnProjectiles({ x, y, collisionProfile, ProjectileClass })
    }, i * 100)
  }
}

function startFire () {
  stopFire()
  throttleFire.get(this)()
  const { perSecond } = this.weaponOptions
  fireTimer.set(this, setInterval(() => {
    fire.call(this, { wave: 2 })
  }, 1000 / perSecond))
}

function stopFire () {
  clearInterval(fireTimer.get(this))
}

function KeyDown (e) {
  switch (e.key) {
    case keypad.Y: {
      this.stopFire()
      this.startFire()
      break
    }
    case keypad.X: {
      this.stopFire()
      this.startFire()
      break
    }
  }
}

function KeyUp (e) {
  switch (e.key) {
    case keypad.Y: {
      this.stopFire()
      break
    }
    case keypad.X: {
      this.stopFire()
      break
    }
  }
}
