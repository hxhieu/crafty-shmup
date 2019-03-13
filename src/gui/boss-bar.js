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
    const h = 12
    const labelW = name.length * 5
    const bar = Crafty.e('DOM, 2D, Color').attr({ w, h, alpha: 0.5 }).color('red')
    const label = Crafty.e('UILabel')
      .attr({ w: labelW, x: (w - labelW) / 2 })
      .text(name.replace(/_/g, ' '))

    this.bind('Remove', function () {
      bar.destroy()
      label.destroy()
    })

    console.log(this)

    this.bind(Events.STRUCTURE_HIT, function () {
      const { current, max } = this.getArmour()
      bar.w = (current / max) * w
    })

    return this
  }
})

// Helpers
