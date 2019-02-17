import '@/components/two-dee-ext'
import '@/components/collider'

export class WeaponBase {
  constructor () {
    this._entity = Crafty.e('2DExt, Collider')
  }
}
