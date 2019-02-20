// Local vars

const currentLevel = new WeakMap()
const maxLevel = 5

// Component definition

Crafty.c('UIPowerUpSlot', {
  required: 'UILayer, Text',

  init: function () {
    this
      .textFont({
        family: '8bit',
        size: '6px'
      })
      .textColor('#666')

    currentLevel.set(this, 1)
  },

  canPowerUp: function () {
    return currentLevel.get(this) < maxLevel
  },

  up: function () {
    let lvl = currentLevel.get(this)
    if (lvl >= maxLevel) {
      return
    }

    lvl++
    this.text(`${this.text().split('-')[0]}-${lvl >= maxLevel ? 'MAX' : lvl}`)
    currentLevel.set(this, lvl)
  }
})
