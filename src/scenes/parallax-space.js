import '@/components/timed-scroller'
import '@/components/self-destroy'
import './objects/stardust'

const FAR_PLANET_SCROLL = 0.007
const BIG_PLANET_SCROLL = 0.02
const BG_MUSIC = 'Loop01'
const BG_BOSS_MUSIC = 'BossFight01'
const BG_VOLUME = 0.5

const isActive = new WeakMap()

// Helpers
export class ParallaxSpaceScene {
  constructor (active = true) {
    this.toggleBgMusic(true)

    this.farPlanets = Crafty.e('2DExt, BGLayer, ParallaxSpaceFarPlanetSprite, TimedScroller, Tween').setName('BG_Far_Planet')
    this.bigPlanet = Crafty.e('2DExt, BGLayer, ParallaxSpaceBigPlanetSprite, TimedScroller, Tween').setName('BG_Big_Planet')
      .attr({ x: 120, y: -40, w: 96 * 1.5, h: 96 * 1.5 })

    this.timer = Crafty.e('Delay').setName('__StardustTimer')
    this.setActive(active)
  }

  slowStardust () {
    if (!isActive.get(this)) {
      return
    }
    // TODO: Optimisation - lower the stardust rate when too many objects
    const rand = Crafty.math.randomInt(400, 1000)
    this.timer.delay(() => {
      Crafty.e('Stardust').setStardustSpeed(10, 40)
      this.slowStardust()
    }, rand)
  }

  fastStardust () {
    if (!isActive.get(this)) {
      return
    }
    // TODO: Optimisation - lower the stardust rate when too many objects
    const rand = Crafty.math.randomInt(400, 600)
    this.timer.delay(() => {
      Crafty.e('Stardust').setStardustSpeed(100, 400)
      this.fastStardust()
    }, rand)
  }

  setActive (active = true) {
    isActive.set(this, active)
    this.bigPlanet.setTimedScroll({ speed: active ? BIG_PLANET_SCROLL : 0 })
    this.farPlanets.setTimedScroll({ speed: active ? FAR_PLANET_SCROLL : 0 })

    if (active) {
      this.slowStardust()
      this.fastStardust()
      if (this.bigPlanet.alpha < 1) {
        this.bigPlanet.tween({ alpha: 1 }, 5000)
        this.farPlanets.tween({ alpha: 1 }, 5000)
      }
    } else {
      this.bigPlanet.tween({ alpha: 0 }, 5000)
      this.farPlanets.tween({ alpha: 0 }, 5000)
      this.timer.delay(() => {
        Crafty('Stardust').get().forEach(x => x.destroy())
      }, 5000)
    }
  }

  toggleBgMusic (active) {
    if (active) {
      Crafty.audio.play(BG_MUSIC, -1, BG_VOLUME)
    } else {
      Crafty.audio.stop(BG_MUSIC)
    }
  }

  toggleBossMusic (active) {
    if (active) {
      Crafty.audio.play(BG_BOSS_MUSIC, -1, BG_VOLUME)
    } else {
      Crafty.audio.stop(BG_BOSS_MUSIC)
    }
  }
}
