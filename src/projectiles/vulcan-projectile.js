import { ProjectileBase } from './base'

export class VulcanProjectile extends ProjectileBase {
  constructor ({ x, y, forward, profile }, level = 1) {
    super({ x, y, forward, profile }, level = 1)
    this._entity.addComponent(`Sprite_VulcanProjectile${level}`)
    this._entity.moveForward(150)
    this._entity.setProjectile(profile, 1, 'Sprite_ExplosionSmall01')
    this._entity.collision([4, 4, 4, 12, 12, 12, 12, 4])
  }
}
