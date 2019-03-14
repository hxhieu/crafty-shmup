import './controls/label'
import '@/components/tween-ext'

import { screenSize } from '@/device'

const OPAQUE = 0.75
const DIMMED = 0.2
const FLASH = 1000
const FLASH_COUNT = 3

export const createBossWarning = () => {
  let flashCount = 1
  const { w, h: screenH } = screenSize
  const h = 40
  const y = (screenH - h) / 2
  const panel = Crafty.e('DOM, 2D, Color, Tween, Delay')
    .attr({ w, h, y, alpha: OPAQUE })
    .color('#ffb301')

  const text = Crafty.e('UILabel, Tween')
    .text('! Abnormal signature ahead !'.toUpperCase())
    .textFont({ size: '30px' })
    .attr({ w, h, x: 16, y: y + 4 })

  Crafty.audio.play('Alert01', -1, 0.25)
  panel.tween({ alpha: DIMMED }, FLASH)
  panel.bind('TweenEnd', function () {
    if (this.alpha === 0) {
      this.delay(() => {
        this.destroy()
        Crafty.audio.stop('Alert01')
      }, 1000)
    }
    if (this.alpha >= OPAQUE) { flashCount++ }
    if (flashCount < FLASH_COUNT) {
      this.tween({ alpha: this.alpha < OPAQUE ? OPAQUE : DIMMED }, FLASH)
    } else {
      this.tween({ alpha: 0 }, 1500)
      text.tween({ alpha: 0 }, 1500)
    }
  })
  panel.attach(text)
  return panel
}
