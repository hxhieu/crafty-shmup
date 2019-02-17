import '@/components/move-forward'
import '@/components/self-destroy'
import '@/components/projectile'

class ProjectileBase {
  constructor ({ x, y, forward }) {
    this.e = Crafty.e(`SelfDestroy, MoveForward, Projectile`)
      .attr({ x, y })
      .lookDirection(forward)
  }
}

class BeamBase {
  constructor ({ x, y, forward }, sprite) {
    this.e = Crafty.e(`2DExt`).attr({ x, y })
    let startY = y
    if (forward.y < 0) {
      while (startY > 0) {
        const segment = Crafty.e(`${sprite}`)
        startY -= segment.h - 1
        const startX = x - segment.w / 2
        segment.attr({ x: startX, y: startY })
        this.e.attach(segment)
      }
    } else {

    }
  }
}

export {
  ProjectileBase,
  BeamBase
}
