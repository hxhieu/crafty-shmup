import { Events } from '@/constants'

// Local vars

const scorePoint = new WeakMap()

// Component definition

Crafty.c('Score', {

  events: {
    [Events.STRUCTURE_DESTROYED]: giveScore
  },

  setScorePoint: function (score) {
    scorePoint.set(this, score)
    return this
  }
})

// Helpers

function giveScore () {
  Crafty.trigger(Events.PLAYER_SCORE, scorePoint.get(this))
  return this
}
