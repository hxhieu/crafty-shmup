import './controls/powerup-slot'
import { screenSize } from '@/device'

// Local vars

const activeText = '#f4bc42'
const inactiveText = '#666'

// Component definition

Crafty.c('PowerUpPanel', {
  required: '2DExt',

  powers: [],
  activeIndex: -1,

  init: function () {
    const slotWidth = 63
    this.powers[0] = Crafty.e('UIPowerUpSlot')
      .text('SPEED')
      .textColor(inactiveText)

    this.powers[1] = Crafty.e('UIPowerUpSlot')
      .text('MISSILE')
      .attr({ x: slotWidth })
      .textColor(inactiveText)

    this.powers[2] = Crafty.e('UIPowerUpSlot')
      .text('MAIN')
      .attr({ x: slotWidth * 2 })
      .textColor(inactiveText)

    this.powers[3] = Crafty.e('UIPowerUpSlot')
      .text('MULTIPLE')
      .attr({ x: slotWidth * 3 })
      .textColor(inactiveText)

    this.powers[4] = Crafty.e('UIPowerUpSlot')
      .text('SHIELD')
      .attr({ x: slotWidth * 4 })
      .textColor(inactiveText)

    this.powers.forEach(x => {
      this.attach(x)
    })

    this.attr({ x: 1, y: screenSize.h - 10, w: 100, h: 8 })
  },

  nextSlot: function () {
    this.activeIndex++
    if (this.activeIndex > this.powers.length - 1) {
      this.activeIndex = 0
    }

    for (let i = 0; i < this.powers.length; i++) {
      this.powers[i].textColor(i === this.activeIndex ? activeText : inactiveText)
    }

    return this
  },

  powerUp: function () {
    if (this.activeIndex < 0) {
      return
    }
    const canPowerUp = this.powers[this.activeIndex].up()
    if (canPowerUp) {
    // Clear the UI
      this.activeIndex = -1
      this.powers.forEach(x => {
        x.textColor(inactiveText)
      })
    }
    return this
  }
})
