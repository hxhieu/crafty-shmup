import '@/components/multiple'

export const createPlayerMultiple = (sprite, weaponTemplate) => {
  return Crafty.e(`${sprite}, Multiple`)
    .useWeapon(weaponTemplate)
}
