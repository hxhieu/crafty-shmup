const CollisionProfiles = {
  PLAYER: 'CollisionProfilePlayer',
  ENEMY: 'CollisionProfileEnemy',
  SOLID: 'CollisionProfileSolid',
  LOOT: 'CollisionProfileLoot'
}

const PlayerEquipments = {
  SPEED: 0,
  MISSILE: 1,
  WEAPON: 2,
  MULTIPLE: 3,
  SHIELD: 4
}

const Events = {
  STRUCTURE_HIT: 'STRUCTURE_HIT',
  STRUCTURE_DESTROYED: 'STRUCTURE_DESTROYED',
  TRIGGER_DESTROY: 'TRIGGER_DESTROY',
  LOOT_ACQUIRED: 'LOOT_ACQUIRED',
  TOGGLE_HITBOX: 'TOGGLE_HITBOX',
  DIRECTION_CHANGED: 'DIRECTION_CHANGED',
  SPRITE_DESTROYED: 'SPRITE_DESTROYED',
  MOVE_TO_DIRECTION: 'MOVE_TO_DIRECTION',
  MOVE_TO_ENDED: 'MOVE_TO_ENDED',
  MOVE_TO_MOVED: 'MOVE_TO_MOVED',
  MOVE_ZIG_ZAG_X: 'MOVE_ZIG_ZAG_X',
  MOVE_ZIG_ZAG_Y: 'MOVE_ZIG_ZAG_Y',
  ENTITY_INIT: 'ENTITY_INIT',
  PLAYER_SPRITE_SET: 'PLAYER_SPRITE_SET'
}

const Loots = {
  POWER_UP: 'POWER_UP'
}

export {
  CollisionProfiles,
  Events,
  Loots,
  PlayerEquipments
}
