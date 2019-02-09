import { ProjectileBase } from './base'

const speed = 300
const impactEffect = 'Sprite_ExplosionSmall01'

export class VulcanProjectile extends ProjectileBase {
  constructor ({ x, y, forward, profile }, level = 1) {
    super({ x, y, forward, profile, impactEffect }, level = 1)
    this._entity.addComponent(`Sprite_VulcanProjectile${level}`)
    this._entity.moveForward(speed)
    this._entity.setProjectile(profile, impactEffect)

    console.log(this._entity)
  }
}
