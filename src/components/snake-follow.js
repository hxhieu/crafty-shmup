import '@/components/keypad'
import { Queue } from '@/utils/queue'

const headPoints = new WeakMap()
const head = new WeakMap()

Crafty.c('SnakeFollow', {
  required: 'Keypad',

  events: {
    ExitFrame
  },

  setSnakeFollowHead: function (obj, step = 50, distance = 10) {
    if (obj && obj.has('Velocity')) {
      head.set(this, obj)
      headPoints.set(this, new Queue())
    }
  }
})

// Helpers

function ExitFrame () {
  const target = head.get(this)
  if (target && (target.isMoving() || this.isKeypadMoving())) {
    const queue = headPoints.get(this)
    const { x, y } = target
    queue.enqueue({ x, y })

    if (queue.getSize() >= 20) {
      const { x: nextX, y: nextY } = queue.dequeue()
      this.x = nextX
      this.y = nextY
    }

    headPoints.set(this, queue)
  }
}
