import { screenSize } from '@/device'

// Component definition

Crafty.c('KillZ', {
  events: {
    EnterFrame
  }
})

// Helpers

function EnterFrame () {
  if (this.y > screenSize.h) {
    this.destroy()
  }
}
