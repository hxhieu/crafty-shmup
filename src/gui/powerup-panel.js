import './controls/powerup-slot'
import { screenSize } from '@/device'
import { PlayerEquipments } from '@/constants'

// Local vars

const activeText = '#f4bc42'
const inactiveText = '#666'

// Component definition

Crafty.c('PowerUpPanel', {
  required: '2DExt',

  powers: [],
  activeIndex: -1,

  init: function () {
    this.setName('GUI_PoweUp_Panel')
    const slotWidth = 63
    this.powers[PlayerEquipments.SPEED] = Crafty.e('UIPowerUpSlot')
      .text('SPEED')
      .textColor(inactiveText)

    this.powers[PlayerEquipments.MISSILE] = Crafty.e('UIPowerUpSlot')
      .text('MISSILE')
      .attr({ x: slotWidth })
      .textColor(inactiveText)

    this.powers[PlayerEquipments.WEAPON] = Crafty.e('UIPowerUpSlot')
      .text('WEAPON')
      .attr({ x: slotWidth * 2 })
      .textColor(inactiveText)

    this.powers[PlayerEquipments.MULTIPLE] = Crafty.e('UIPowerUpSlot')
      .text('MULTIPLE')
      .attr({ x: slotWidth * 3 })
      .textColor(inactiveText)
      .setMaxLevel(3)

    this.powers[PlayerEquipments.SHIELD] = Crafty.e('UIPowerUpSlot')
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
      return false
    }
    const currentSlot = this.powers[this.activeIndex]
    if (!currentSlot.canPowerUp()) {
      return false
    }
    currentSlot.up()
    // Clear the UI
    this.activeIndex = -1
    this.powers.forEach(x => {
      x.textColor(inactiveText)
    })
    return true
  },

  getSlotLevel: function (slotIndex) {
    return this.powers[slotIndex].getLevel()
  }
})
