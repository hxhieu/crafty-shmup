import { keypad } from '@/device'
import { CollisionProfiles } from '@/physics'

// Local vars
let fireTimer

let ProjectileClass

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
  setProjectileClass: function (projectileClass) {
    ProjectileClass = projectileClass
  },
  startFire,
  stopFire
})

// Helpers

function EnterFrame () {

}

function spawnProjectiles (pos) {
  const { x, y } = pos
  // const forward = this.getForward()
  // console.log(forward)
  /* eslint-disable no-new */
  new ProjectileClass({
    x: x + 4,
    y,
    forward: new Crafty.math.Vector2D(0, -1),
    profile: CollisionProfiles.player
  })

  new ProjectileClass({
    x: x - 4,
    y,
    forward: new Crafty.math.Vector2D(0, -1),
    profile: CollisionProfiles.player
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

function startFire () {
  stopFire()
  // spawnProjectiles(this.getCentrePos())
  fireTimer = setInterval(() => {
    spawnProjectiles(this.getCentrePos())
  }, 300)
}

function stopFire () {
  clearInterval(fireTimer)
}

function KeyDown (e) {
  switch (e.key) {
    case keypad.Y: {
      this.startFire()
    }
  }
}

function KeyUp (e) {
  switch (e.key) {
    case keypad.Y: {
      this.stopFire()
    }
  }
}
