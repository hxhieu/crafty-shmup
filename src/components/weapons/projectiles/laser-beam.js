import { BeamBase } from './base'

export class LaserBeam extends BeamBase {
  constructor (specs) {
    const { level } = specs
    super(specs, `Sprite_ProjectileLaser${level >= 4 ? 2 : 1}`)
  }
}
