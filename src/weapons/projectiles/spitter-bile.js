import { createProjectileBase } from './base'

export const createSpitterBile = specs => {
  const { profile, power } = specs
  return createProjectileBase(specs)
    .addComponent(`Sprite_ProjectileSpitterBile`)
    .setProps(profile, power, { impact: 'Sprite_ExplosionSmall01' })
    .setHitbox([4, 4, 4, 12, 12, 12, 12, 4])
    .moveForward(50)
}
