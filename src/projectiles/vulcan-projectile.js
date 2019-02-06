import '@/components/collider'
import '@/components/move-to'

// let entity
const speed = 2
// let direction

export class VulcanProjectile {
  constructor ({ x, y, forward }, level = 1) {
    Crafty.e(`Sprite_VulcanProjectile${level}, Collider, MoveTo`)
      .attr({ x, y })
      .bind('EnterFrame', enterFrame)
      .lookDirection(forward)

    // direction = forward
    // console.log(entity)
  }
}

function enterFrame () {
  if (this.outOfScreen()) {
    this.destroy()
  }
  // const newPos = this.pos().add(new Crafty.math.Vector2D(0, 2)).normalize()
  // console.log(newPos)
  // this.moveTo(this.x, this.y - 1, speed, false)
  this.y -= speed
  this.x = this.x
  console.log(this.getCentrePos())
}
