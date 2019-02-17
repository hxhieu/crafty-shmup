import { ProjectileBase } from './base'

export class VulcanProjectile extends ProjectileBase {
  constructor (specs) {
    super(specs)
    const { profile, level, power } = specs
    this._entity
      .addComponent(`Sprite_ProjectileVulcan${level >= 5 ? 2 : 1}`)
      .setProjectile(profile, power, { impact: 'Sprite_ExplosionSmall01', sound: 'GunShoot01' })
      .collision([4, 4, 4, 12, 12, 12, 12, 4])
      .moveForward(150)
  }
}
