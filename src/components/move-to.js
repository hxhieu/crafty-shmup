import './two-dee-ext'

// Local vars

let moveSpeed = 2
let target
let oldDirection = {
  x: 0,
  y: 0
}
let animated

// Component definition

Crafty.c('MoveTo', {
  required: '2DExt',

  events: {
    EnterFrame,
    NewDirection,
    MoveEnded
  },
  init: function () {
    target = {
      x: this.x,
      y: this.y
    }
  },

  moveTo: function (x, y, speed, animate = true) {
    moveSpeed = speed || moveSpeed
    animated = animate

    target = {
      x: x,
      y: y
    }
    return this
  }
})

// Helpers

function stopMove () {
  target = undefined
  if (this) {
    this.trigger('MoveEnded')
  }
}

function NewDirection (dir) {
  if (animated) {
    if (dir.x > 0) {
      this.flip('X').animate('rotate', -1)
    } else if (dir.x < 0) {
      this.unflip('X').animate('rotate', -1)
    } else {
      this.animate('level', -1)
    }
  }
}

function MoveEnded () {
  if (animated) {
    this.animate('level', -1)
  }
}

function EnterFrame () {
  if (!target) return

  var dx = target.x - this.x

  var dy = target.y - this.y

  var oldX = this.x

  var oldY = this.y

  var delta = Math.sqrt(dx * dx + dy * dy)

  // Don't move with such tiny changed
  if (Math.abs(delta) < 0.05) {
    stopMove()
    return
  }

  var movX = (dx * moveSpeed) / delta

  var movY = (dy * moveSpeed) / delta

  // Reached destination
  if (Math.abs(dx) < Math.abs(movX) && Math.abs(dy) < Math.abs(movY)) {
    stopMove()
    return
  }

  // Triggered when direction changes - either because of a mouse click, or something external
  if (Math.abs(movX - oldDirection.x) > 0.1 || Math.abs(movY - oldDirection.y) > 0.1) {
    this.trigger('NewDirection', {
      x: movX,
      y: movY
    })
  }

  oldDirection = {
    x: movX,
    y: movY
  }

  // Moved triggered twice to allow for better collision logic (like moving along diagonal walls)
  this.x += movX
  this.trigger('Moved', {
    x: oldX,
    y: this.y
  })
  this.y += movY
  this.trigger('Moved', {
    x: this.x,
    y: oldY
  })
}
