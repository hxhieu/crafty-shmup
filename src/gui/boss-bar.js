import '@/components/structure'
import './controls/label'

import { screenSize } from '@/device'
import { Events } from '@/constants'

// Local vars

// Component definition

Crafty.c('BossBar', {
  required: 'Structure',

  setBossBar: function (name) {
    const { w } = screenSize
    const h = 2
    const labelW = name.length * 5
    const bar = Crafty.e('DOM, 2D, Color, Tween').attr({ w, h, alpha: 0 }).color('red')
    const label = Crafty.e('UILabel, Tween')
      .attr({ w: labelW, x: (w - labelW) / 2, alpha: 0 })
      .text(name.replace(/_/g, ' '))

    bar.tween({ alpha: 1 }, 5000)
    label.tween({ alpha: 1 }, 5000)

    this.bind('Remove', function () {
      bar.destroy()
      label.destroy()
    })

    this.bind(Events.STRUCTURE_HIT, function () {
      const { current, max } = this.getArmour()
      const pct = current / max
      bar.w = (current > 0 ? pct : 0) * w
    })

    return this
  }
})

// Helpers
