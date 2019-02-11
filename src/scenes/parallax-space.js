import '@/components/timed-scroller'
import '@/components/tween-ext'
import { screenSize } from '../device'

// Helpers
export class ParallaxSpaceScene {
  constructor () {
    this.bg = Crafty.e('2DExt, Canvas, SpriteAnimationExt, ParallaxSpaceBgSprite').attr({ alpha: 0.95 })
    this.farPlanets = Crafty.e('2DExt, Canvas, SpriteAnimationExt, ParallaxSpaceFarPlanetSprite, TimedScroller')
    // this.ringPlanets = Crafty.e('2DExt, Canvas, SpriteAnimationExt, ParallaxSpaceRingPlanetSprite')
    this.bigPlanet = Crafty.e('2DExt, Canvas, SpriteAnimationExt, ParallaxSpaceBigPlanetSprite, TimedScroller')

    this.bigPlanet
      .attr({ x: 0, y: -240, w: screenSize.w * 1.5, h: screenSize.h * 1.5 })
      .setTimedScroll({
        speed: 0.01
      })

    this.farPlanets.setTimedScroll({
      speed: 0.007
    })

    this.buildStarField()
  }

  buildStarField () {
    for (let i = 0; i < 2; i++) {
      const stars = Crafty.e('2DExt, Canvas, SpriteAnimationExt, ParallaxSpaceStarsSprite, TimedScroller')
      const x = Crafty.math.randomInt(-screenSize.w / 2, screenSize.w / 2)
      const y = Crafty.math.randomInt(-screenSize.h / 2, screenSize.h / 2)
      const rotation = Crafty.math.randomInt(0, 360)
      const alpha = Crafty.math.randomNumber(0.8, 1)
      const speed = Crafty.math.randomNumber(0.01, 0.2)

      stars
        .origin('center')
        .attr({ x, y, alpha, rotation })
        .setTimedScroll({
          speed,
          repeat: true
        })
    }
  }
}
