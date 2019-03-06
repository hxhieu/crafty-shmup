const screenSize = {
  w: 320,
  h: 240
}

const keypad = {
  UP: Crafty.keys.UP_ARROW,
  DOWN: Crafty.keys.DOWN_ARROW,
  LEFT: Crafty.keys.LEFT_ARROW,
  RIGHT: Crafty.keys.RIGHT_ARROW,
  A: Crafty.keys.J,
  B: Crafty.keys.K,
  X: Crafty.keys.U,
  Y: Crafty.keys.I,
  MENU: Crafty.keys.ESC,
  START: Crafty.keys.ENTER,
  SELECT: Crafty.keys.SPACE
}

const isLowSpec = navigator.userAgent.indexOf('arm') >= 0

export {
  screenSize,
  keypad,
  isLowSpec
}
