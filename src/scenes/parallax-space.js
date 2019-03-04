import '@/components/timed-scroller'
import '@/components/self-destroy'
import { screenSize } from '../device'

// Helpers
export class ParallaxSpaceScene {
  constructor () {
    Crafty.createLayer('BGLayer', 'DOM', { scaleResponse: 0, xResponse: 0, yResponse: 0, z: 0 })
    Crafty.audio.play('Loop01', -1, 0.5)

    Crafty.background('url(assets/images/Parallax_Space_BG.png)')
    this.farPlanets = Crafty.e('2DExt, BGLayer, ParallaxSpaceFarPlanetSprite, TimedScroller')
    this.bigPlanet = Crafty.e('2DExt, BGLayer, ParallaxSpaceBigPlanetSprite, TimedScroller')

    this.bigPlanet
      .attr({ x: 120, y: -40, w: 96 * 1.5, h: 96 * 1.5 })
      .setTimedScroll({
        speed: 0.01
      })

    this.farPlanets.setTimedScroll({
      speed: 0.007
    })

    this.timer = Crafty.e('Delay')

    this.buildStarField()
    this.buildStarField()
    this.starsGenerator()
  }

  starsGenerator () {
    const rand = Crafty.math.randomInt(400, 10000)
    this.timer.delay(() => {
      this.buildStarField()
      this.starsGenerator()
    }, rand)
  }

  buildStarField () {
    const type = Crafty.math.randomInt(1, 2)
    const stars = Crafty.e(`2DExt, BGLayer, ParallaxSpaceStars${type}Sprite, TimedScroller`)
    const x = Crafty.math.randomInt(0, screenSize.w)
    const y = Crafty.math.randomInt(-150, -50)
    const rotation = Crafty.math.randomInt(0, 360)
    const alpha = Crafty.math.randomNumber(0.6, 1)
    const speed = Crafty.math.randomNumber(0.1, 0.4)

    stars
      .origin('center')
      .attr({ x, y, alpha, rotation })
      .setTimedScroll({ speed })
  }
}
