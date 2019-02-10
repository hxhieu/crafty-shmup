import { keypad } from '@/device'
import { CollisionProfiles } from '@/constants'

// Local vars
const fireTimer = new WeakMap()
const projectileClass = new WeakMap()

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
  setProjectileClass: function (projectile) {
    projectileClass.set(this, projectile)
  },
  startFire,
  stopFire
})

// Helpers

function EnterFrame () {

}

function spawnProjectiles (entity) {
  const { x, y } = entity.getCentrePos()
  const ProjectileClass = projectileClass.get(entity)
  // const forward = this.getForward()
  // console.log(forward)
  /* eslint-disable no-new */
  new ProjectileClass({
    x: x - 4,
    y: y - 8,
    forward: new Crafty.math.Vector2D(0, -1),
    profile: CollisionProfiles.player
  })

  new ProjectileClass({
    x: x - 12,
    y: y - 8,
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
  spawnProjectiles(this)
  fireTimer.set(this, setInterval(() => {
    spawnProjectiles(this)
  }, 300))
}

function stopFire () {
  clearInterval(fireTimer.get(this))
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
      break
    }
    case Crafty.keys.F: {
      this.toggleHitbox(true)
      break
    }
  }
}
