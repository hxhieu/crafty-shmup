import '@/components/move-forward'
import '@/components/self-destroy'

// let entity
const speed = 300
// let direction

export class VulcanProjectile {
  constructor ({ x, y, forward }, level = 1) {
    Crafty.e(`Sprite_VulcanProjectile${level}, SelfDestroy, MoveForward`)
      .attr({ x, y })
      // .bind('EnterFrame', enterFrame)
      .lookDirection(forward)
      .moveForward(speed)

    // direction = forward
    // console.log(entity)
  }
}

// function enterFrame ({ dt }) {
//   if (this.outOfScreen()) {
//     this.destroy()
//   }
//   // const newPos = this.pos().add(new Crafty.math.Vector2D(0, 2)).normalize()
//   // console.log(newPos)
//   // this.moveTo(this.x, this.y - 1, speed, false)
//   this.y -= speed * (dt / 1000)
//   this.x = this.x
// }
