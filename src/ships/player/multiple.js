import '@/components/multiple'
import { CollisionProfiles } from '@/constants'

export const createPlayerMultiple = (sprite, weaponTemplate) => {
  return Crafty.e(`${sprite}, ${CollisionProfiles.PLAYER}, Multiple`)
    .useWeapon(weaponTemplate)
}
