// Local vars

const currentLevel = new WeakMap()
const maxLevel = new WeakMap()

// Component definition

Crafty.c('UIPowerUpSlot', {
  required: 'UILayer, Text',

  init: function () {
    this.setName('GUI_PowerUp_Slot')
    this
      .textFont({
        family: '8bit',
        size: '12px'
      })
      .textColor('#666')

    currentLevel.set(this, 1)
    this.setMaxLevel(5)
  },

  canPowerUp: function () {
    return currentLevel.get(this) < maxLevel.get(this)
  },

  up: function () {
    const max = maxLevel.get(this)
    let lvl = currentLevel.get(this)
    if (lvl >= max) {
      return
    }

    lvl++
    this.text(`${this.text().split('-')[0]}-${lvl >= max ? 'MAX' : lvl}`)
    currentLevel.set(this, lvl)
  },

  setMaxLevel: function (max) {
    maxLevel.set(this, max)
    return this
  },

  getLevel: function () {
    return currentLevel.get(this)
  }
})
