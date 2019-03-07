import '@/components/timed-scroller'
import '@/components/self-destroy'
import './objects/stardust'

// Helpers
export class ParallaxSpaceScene {
  constructor () {
    // Crafty.audio.play('Loop01', -1, 0.5)

    // Crafty.background('url(assets/images/Parallax_Space_BG.png)')
    this.farPlanets = Crafty.e('2DExt, BGLayer, ParallaxSpaceFarPlanetSprite, TimedScroller')
    this.bigPlanet = Crafty.e('2DExt, BGLayer, ParallaxSpaceBigPlanetSprite, TimedScroller')

    this.bigPlanet
      .attr({ x: 120, y: -40, w: 96 * 1.5, h: 96 * 1.5 })
      .setTimedScroll({
        speed: 0.02
      })

    this.farPlanets.setTimedScroll({
      speed: 0.007
    })

    this.timer = Crafty.e('Delay')
    this.slowStardust()
    this.fastStardust()
  }

  slowStardust () {
    // TODO: Optimisation - lower the stardust rate when too many objects
    const rand = Crafty.math.randomInt(400, 1000)
    this.timer.delay(() => {
      Crafty.e('Stardust').setStardustSpeed(10, 40)
      this.slowStardust()
    }, rand)
  }

  fastStardust () {
    // TODO: Optimisation - lower the stardust rate when too many objects
    const rand = Crafty.math.randomInt(400, 600)
    this.timer.delay(() => {
      Crafty.e('Stardust').setStardustSpeed(100, 400)
      this.fastStardust()
    }, rand)
  }
}
