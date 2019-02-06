import { keypad } from '@/device'

// Local vars

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

function startFire () {
  const { x, y } = this.getCentrePos()
  const proj = new ProjectileClass({
    x,
    y,
    forward: this.getForward()
  })
  console.log(proj)
}

function stopFire () {
  console.log('Stop fire')
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
