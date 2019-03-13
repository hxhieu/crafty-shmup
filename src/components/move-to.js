import { Events } from '@/constants'

// Local vars

const specs = new WeakMap()
const oldDirection = new WeakMap()

// Component definition

Crafty.c('MoveTo', {
  required: '2DExt',

  events: {
    EnterFrame,
    [Events.MOVE_TO_DIRECTION]: NewDirection,
    [Events.MOVE_TO_ENDED]: MoveEnded,
    [Events.STRUCTURE_DESTROYED]: stopMove
  },
  init: function () {
    specs.set(this, {
      x: this.x,
      y: this.y
    })
  },

  moveTo: function (options) {
    specs.set(this, options)
    return this
  },

  setMoveSpeed: function (speed) {
    let options = specs.get(this)
    options = Object.assign(options, {
      speed
    })
    specs.set(this, options)
  }
})

// Helpers

function stopMove () {
  let options = specs.get(this)
  options = Object.assign(options, {
    x: this.x,
    y: this.y
  })
  specs.set(this, options)
  if (this) {
    this.trigger(Events.MOVE_TO_ENDED)
  }
}

function NewDirection (dir) {
  const { animate } = specs.get(this)
  if (animate) {
    if (dir.x > 0) {
      this.safeAnimate('rotateLeft', -1)
    } else if (dir.x < 0) {
      this.safeAnimate('rotateRight', -1)
    } else {
      this.safeAnimate('level', -1)
    }
  }
}

function MoveEnded () {
  const { animate } = specs.get(this)
  if (animate) {
    this.safeAnimate('level', -1)
  }
}

function EnterFrame ({ dt }) {
  const { x, y, speed } = specs.get(this)

  // No move needed
  if (speed <= 0 || (x === this.x && y === this.y)) {
    return
  }

  var dx = x - this.x
  var dy = y - this.y

  var delta = Math.sqrt(dx * dx + dy * dy)

  // Don't move with such tiny changed
  if (Math.abs(delta) < 0.01) {
    stopMove.call(this)
    return
  }

  const moveSpeed = speed * (dt / 1000)

  var movX = (dx * moveSpeed) / delta

  var movY = (dy * moveSpeed) / delta

  // Reached destination
  if (Math.abs(dx) <= Math.abs(movX) && Math.abs(dy) <= Math.abs(movY)) {
    stopMove.call(this)
    return
  }

  // Triggered when direction changes - either because of a mouse click, or something external
  if (Math.abs(movX - oldDirection.x) > 0.1 || Math.abs(movY - oldDirection.y) > 0.1) {
    this.trigger(Events.MOVE_TO_DIRECTION, {
      x: movX,
      y: movY
    })
  }

  oldDirection.set(this, {
    x: movX,
    y: movY
  })

  this.x += movX
  this.y += movY
  this.trigger(Events.MOVE_TO_MOVED, {
    x: this.x,
    y: this.y
  })
}
