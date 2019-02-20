const CollisionProfiles = {
  PLAYER: 'CollisionProfilePlayer',
  ENEMY: 'CollisionProfileEnemy',
  SOLID: 'CollisionProfileSolid',
  LOOT: 'CollisionProfileLoot'
}

const Events = {
  STRUCTURE_HIT: 'STRUCTURE_HIT',
  STRUCTURE_DESTROYED: 'STRUCTURE_DESTROYED',
  TRIGGER_DESTROY: 'TRIGGER_DESTROY',
  LOOT_ACQUIRED: 'LOOT_ACQUIRED',
  TOGGLE_HITBOX: 'TOGGLE_HITBOX',
  DIRECTION_CHANGED: 'DIRECTION_CHANGED'
}

const Loots = {
  POWER_UP: 'POWER_UP'
}

export {
  CollisionProfiles,
  Events,
  Loots
}
