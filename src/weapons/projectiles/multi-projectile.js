import { createProjectileBase } from './base'

export const createMultiProjectile = specs => {
  const { profile, level, power } = specs
  return createProjectileBase(specs)
    .addComponent(`Sprite_ProjectileMulti${level === 5 ? 2 : 1}`)
    .setProps(profile, power, { impact: 'Sprite_ExplosionSmall01', sound: 'GunShoot01' })
    .setHitbox(8)
    .moveForward(400)
}
