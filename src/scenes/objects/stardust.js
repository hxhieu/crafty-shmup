import '@/components/random-start'
import '@/components/kill-z'
import '@/components/move-forward'
// Local vars

// Component definition

Crafty.c('Stardust', {
  required: '2DExt, BGStardust, RandomStart, KillZ, MoveForward, Delay',
  speed: 0,

  events: {
    Draw
  },
  init: function () {
    this.setName('Stardust')
    this.setRandomStart({
      top: 0,
      bottom: 0
    })
      .lookDirection(new Crafty.math.Vector2D(0, 1))
    this.ready = true
  },

  setStardustSpeed: function (min, max) {
    this.speed = Crafty.math.randomNumber(min, max)
    this.moveForward(this.speed)
    return this
  }
})

// Helpers

function Draw (e) {
  const { ctx } = e
  const { _x, _y } = e.pos
  ctx.lineWidth = 1
  let colour = randomColour()
  let baseAlpha = Crafty.math.randomNumber(100, 255)

  // Head
  const headLength = 2
  ctx.strokeStyle = `${colour}${baseAlpha.toHex()}`
  ctx.beginPath()
  ctx.moveTo(_x, _y)
  ctx.lineTo(_x, _y + headLength)
  ctx.stroke()

  // Body
  const bodyLength = this.speed * 0.1
  ctx.strokeStyle = `${colour}${(baseAlpha / 2).toHex()}`
  ctx.beginPath()
  ctx.moveTo(_x, _y + headLength)
  ctx.lineTo(_x, _y + bodyLength)
  ctx.stroke()

  // Tail
  const tailLength = (this.speed * 0.1) * 4
  ctx.strokeStyle = `${colour}${(baseAlpha / 3).toHex()}`
  ctx.beginPath()
  ctx.moveTo(_x, _y + bodyLength)
  ctx.lineTo(_x, _y + tailLength)
  ctx.stroke()
}

function randomColour () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
