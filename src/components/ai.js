// Local vars

const subject = new WeakMap()

// Component definition

Crafty.c('AI', {
  // required: 'XXX',

  setAISubject: function (sub) {
    subject.set(this, sub)
    return this
  },

  tell: function (thinking) {
    if (window.debug) {
      console.info(`${subject.get(this)} > I am ${thinking}`)
    }
    return this
  }
})

// Helpers
