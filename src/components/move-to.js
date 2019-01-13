import './two-dee-ext'

Crafty.c('MoveTo', {
  _moveSpeed: 2,

  _target: undefined,

  _stopMove: function () {
    this._target = undefined
    this.trigger('MoveEnded')
  },

  _enterFrame: function () {
    if (!this._target) return

    var dx = this._target.x - this.x

    var dy = this._target.y - this.y

    var oldX = this.x

    var oldY = this.y

    var delta = Math.sqrt(dx * dx + dy * dy)

    // Don't move with such tiny changed
    if (Math.abs(delta) < 0.05) {
      // this._stopMove();
      return
    }

    var movX = (dx * this._moveSpeed) / delta

    var movY = (dy * this._moveSpeed) / delta

    // Reached destination
    if (Math.abs(dx) < Math.abs(movX) && Math.abs(dy) < Math.abs(movY)) {
      this._stopMove()
      return
    }

    // Triggered when direction changes - either because of a mouse click, or something external
    if (Math.abs(movX - this.oldDirection.x) > 0.1 || Math.abs(movY - this.oldDirection.y) > 0.1) {
      this.trigger('NewDirection', {
        x: movX,
        y: movY
      })
    }

    this.oldDirection = {
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
  },

  _newDirection: function (dir) {
    if (dir.x > 0) {
      this.flip('X').animate('rotate', -1)
    } else if (dir.x < 0) {
      this.unflip('X').animate('rotate', -1)
    } else {
      this.animate('level', -1)
    }
  },

  _moveEnded: function () {
    this.animate('level', -1)
  },

  init: function () {
    // Must have 2d coords
    this.requires('2DExt')

    this._target = {
      x: this.x,
      y: this.y
    }

    this.oldDirection = {
      x: 0,
      y: 0
    }

    this.bind('EnterFrame', this._enterFrame)
    this.bind('NewDirection', this._newDirection)
    this.bind('MoveEnded', this._moveEnded)
  },

  moveTo: function (x, y, speed) {
    this._moveSpeed = speed || this._moveSpeed

    this._target = {
      x: x,
      y: y
    }
    return this
  }
})
