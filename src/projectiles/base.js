import '@/components/move-forward'
import '@/components/self-destroy'
import '@/components/projectile'

export class ProjectileBase {
  constructor ({ x, y, forward }) {
    this._entity = Crafty.e(`SelfDestroy, MoveForward, Projectile`)
      .attr({ x, y })
      .lookDirection(forward)
  }
}
