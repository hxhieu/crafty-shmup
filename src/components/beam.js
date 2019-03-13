import '@/components/sound-clip'
import { screenSize } from '@/device'
import uniqWith from 'lodash.uniqwith'

// Local vars

const data = new WeakMap()
const currentTime = new WeakMap()
const tickInterval = 100

// Component definition

Crafty.c('Beam', {
  required: '2DExt, SoundClip',

  events: {
    EnterFrame
  },

  setProps: function (profile, specs, effects) {
    data.set(this, { profile, specs, effects })
    this.playSoundClip(effects)
    return this
  }
})

// Helpers

function EnterFrame ({ dt }) {
  const { profile, specs, effects } = data.get(this)
  const time = (currentTime.get(this) || 0) + dt
  if (time >= tickInterval) {
    rayHit.call(this, { profile, specs, effects })
    currentTime.set(this, 0)
    return
  }

  currentTime.set(this, time)
}

function rayHit ({ profile, specs, effects }) {
  const { power, width } = specs
  const { impact } = effects
  const { ox, oy: _y } = this

  let hits = []

  // Ray cast all beam width
  for (let _x = ox - width / 2; _x < ox + width / 2; _x++) {
    hits = hits.concat(Crafty.raycast({ _x, _y }, this.getForward(), screenSize.h)
      .filter(x =>
        x.obj &&
        x.obj.collisionProfile &&
        x.obj.collisionProfile !== profile &&
        x.obj.has('Structure')
      )
    )
  }

  // Only unique hits - by ID
  hits = uniqWith(hits, (a, b) => a.obj[0] === b.obj[0])

  for (let i = 0; i < hits.length; i++) {
    const other = hits[i].obj

    other.takeDamage(power)

    // Lay down the impacts
    if (impact) {
      const fx = Crafty.e(impact)
      const { ox, oy } = other
      const { w, h } = other.getHitbox()

      // Random range
      let x1 = ox - w / 2
      let x2 = ox + w / 2
      let y1 = oy - h / 2
      let y2 = oy + h / 2

      // fx offsets
      x1 -= fx.w / 2
      x2 -= fx.w / 2
      y1 -= fx.h / 2
      y2 -= fx.h / 2

      fx.attr({
        x: Crafty.math.randomNumber(x1, x2),
        y: Crafty.math.randomNumber(y1, y2)
      })
    }
  }
}
