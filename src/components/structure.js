import '@/components/tween-ext'
// Local vars

// Component definition

Crafty.c('Structure', {
  required: 'TweenExt, Color',
  takeDamage,
  setStructure
})

// Helpers

function setStructure (armour, shield) {

}

function takeDamage (amount) {
  this.tweenflash()
  console.log(amount)
}
