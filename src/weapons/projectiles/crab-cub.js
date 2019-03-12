import { createProjectileBase } from './base'

export const createCrabCubProjectile = specs => {
  const { profile, power } = specs
  return createProjectileBase(specs)
    .addComponent(`Sprite_ProjectileCrabCub`)
    .setProps(profile, power, { impact: 'Sprite_ExplosionAcidSplash' })
    .setHitbox(8)
    .moveForward(40)
}
