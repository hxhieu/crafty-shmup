import '@/components/move-forward'
import '@/components/self-destroy'
import '@/components/projectile'
import '@/components/two-dee-ext'

class ProjectileBase {
  constructor ({ x, y, forward }) {
    this._entity = Crafty.e(`SelfDestroy, MoveForward, Projectile`)
      .attr({ x, y })
      .lookDirection(forward)
  }
}

class BeamBase {
  constructor ({ x, y, forward }, sprite) {
    this._entity = Crafty.e(`2DExt, ${sprite}`).attr({ x, y })
    let growY = y
    if (forward.y < 0) {
      while (growY > 0) {
        growY -= 16
        const segment = Crafty.e(`${sprite}`).attr({ x, y: growY })
        this._entity.attach(segment)
      }
    } else {

    }
  }
}

export {
  ProjectileBase,
  BeamBase
}
