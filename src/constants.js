const CollisionProfiles = {
  PLAYER: 'CollisionProfilePlayer',
  ENEMY: 'CollisionProfileEnemy',
  SOLID: 'CollisionProfileSolid',
  LOOT: 'CollisionProfileLoot'
}

const Events = {
  STRUCTURE_TAKE_DAMAGE: 'STRUCTURE_TAKE_DAMAGE',
  STRUCTURE_DESTROY: 'STRUCTURE_DESTROY',
  LOOT_ACQUIRED: 'LOOT_ACQUIRED',
  TOGGLE_HITBOX: 'TOGGLE_HITBOX'
}

const Loots = {
  POWER_UP: 'POWER_UP'
}

export {
  CollisionProfiles,
  Events,
  Loots
}
