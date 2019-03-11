import { createProjectileBase } from './base'

export const createGreenAcidProjectile = specs => {
  const { profile, power } = specs
  return createProjectileBase(specs)
    .addComponent(`Sprite_ProjectileGreenAcid`)
    .setProps(profile, power, { impact: 'Sprite_ExplosionSmall01' })
    .setHitbox(8)
    .moveForward(40)
}
