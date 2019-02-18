import { createBeamBase } from './base'

export const createLaserBeam = specs => {
  const { level } = specs
  return createBeamBase(specs, `Sprite_ProjectileLaser${level >= 4 ? 2 : 1}`)
}
