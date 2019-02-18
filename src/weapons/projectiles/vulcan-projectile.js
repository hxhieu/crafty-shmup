import { createProjectileBase } from './base'

export const createVulcanProjectile = specs => {
  const { profile, level, power } = specs
  return createProjectileBase(specs)
    .addComponent(`Sprite_ProjectileVulcan${level >= 5 ? 2 : 1}`)
    .setProjectile(profile, power, { impact: 'Sprite_ExplosionSmall01', sound: 'GunShoot01' })
    .setHitbox([4, 4, 4, 12, 12, 12, 12, 4])
    .moveForward(150)
}
