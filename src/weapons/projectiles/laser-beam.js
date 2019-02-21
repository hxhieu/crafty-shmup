import { createBeamBase } from './base'

export const createLaserBeam = (profile, specs) => {
  const { level } = specs
  return createBeamBase(specs, `Sprite_ProjectileLaser${level >= 4 ? 2 : 1}`)
    .setProps(profile, specs, { impact: 'Sprite_ExplosionSmall01', sound: 'Laser01' })
}
