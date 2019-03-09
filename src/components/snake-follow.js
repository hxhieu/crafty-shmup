import '@/components/keypad'
import { Queue } from '@/utils/queue'
import { isLowSpec } from '@/device'

const headPoints = new WeakMap()
const head = new WeakMap()
const followDistance = isLowSpec ? 5 : 10

Crafty.c('SnakeFollow', {
  required: 'Keypad',

  events: {
    ExitFrame
  },

  setSnakeFollowHead: function (obj) {
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

    // TODO: Hard code steps
    if (queue.getSize() >= followDistance) {
      const { x: nextX, y: nextY } = queue.dequeue()
      this.x = nextX
      this.y = nextY
    }

    headPoints.set(this, queue)
  }
}
