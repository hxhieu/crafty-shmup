import { ProjectileBase } from './base'

export class VulcanProjectile extends ProjectileBase {
  constructor ({ x, y, forward, profile }, level = 1) {
    super({ x, y, forward, profile }, level = 1)
    this._entity
      .addComponent(`Sprite_ProjectileVulcan${level}`)
      .setProjectile(profile, 1, 'Sprite_ExplosionSmall01')
      .collision([4, 4, 4, 12, 12, 12, 12, 4])
      .moveForward(150)
  }
}
