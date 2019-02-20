import '@/components/move-forward'
import '@/components/self-destroy'
import '@/components/projectile'

const createProjectileBase = ({ x, y, forward }) => {
  return Crafty.e(`SelfDestroy, MoveForward, Projectile`)
    .attr({ ox: x, oy: y })
    .lookDirection(forward)
}

const createBeamBase = ({ x, y, forward }, sprite) => {
  const e = Crafty.e(`2DExt`).attr({ x, y })
  let startY = y
  if (forward.y < 0) {
    while (startY > 0) {
      const segment = Crafty.e(`${sprite}`)
      startY -= segment.h - 1
      const startX = x - segment.w / 2
      segment.attr({ x: startX, y: startY })
      e.attach(segment)
    }
  } else {

  }
  return e
}

export {
  createProjectileBase,
  createBeamBase
}
