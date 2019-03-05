import { keypad } from '@/device'
// Local vars

const activeKeys = new WeakMap()

// Component definition

Crafty.c('Keypad', {
  events: {
    KeyDown,
    KeyUp
  },

  isKeypadMoving: function () {
    const keys = activeKeys.get(this) || {}
    return keys[keypad.UP] || keys[keypad.DOWN] || keys[keypad.LEFT] || keys[keypad.RIGHT]
  }
})

// Helpers

function KeyDown (e) {
  setKeyState.call(this, e, true)
}

function KeyUp (e) {
  setKeyState.call(this, e, false)
}

function setKeyState (e, active) {
  let currentKeys = activeKeys.get(this) || {}
  const key = e.key
  currentKeys = Object.assign(currentKeys, { [key]: active })
  activeKeys.set(this, currentKeys)
}
