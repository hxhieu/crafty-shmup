import { ProjectileBase } from './base'

export class MultiProjectile extends ProjectileBase {
  constructor (specs) {
    super(specs)
    const { profile, level, power } = specs
    this.e
      .addComponent(`Sprite_ProjectileMulti${level >= 4 ? 2 : 1}`)
      .setProjectile(profile, power, { impact: 'Sprite_ExplosionSmall01', sound: 'GunShoot01' })
      .collision([4, 4, 4, 12, 12, 12, 12, 4])
      .moveForward(250)
  }
}
