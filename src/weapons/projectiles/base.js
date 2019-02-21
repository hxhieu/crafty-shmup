import '@/components/move-forward'
import '@/components/self-destroy'
import '@/components/projectile'
import '@/components/beam'

import { Events } from '@/constants'

const createProjectileBase = ({ x, y, forward }) => {
  return Crafty.e(`SelfDestroy, MoveForward, Projectile`)
    .attr({ ox: x, oy: y })
    .lookDirection(forward)
}

const createBeamBase = ({ x, y, forward, width }, sprite) => {
  const e = Crafty.e(`2DExt, Beam`).attr({ x, y })
  let startY = y
  if (forward.y < 0) {
    while (startY > 0) {
      const segment = Crafty.e(`${sprite}`).attr({ w: width })
      startY -= segment.h - 1
      const startX = x - segment.w / 2
      segment.attr({ x: startX, y: startY })
      e.attach(segment)

      // Destroy when the sprite done animation
      segment.bind(Events.SPRITE_DESTROYED, function () {
        e.destroy()
      })
    }
  } else {

  }
  return e
}

export {
  createProjectileBase,
  createBeamBase
}
