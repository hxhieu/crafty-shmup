/* eslint-disable */

Number.prototype.toDeg = function () {
  return this * (180 / Math.PI)
}

Number.prototype.toRad = function () {
  return this * (Math.PI / 180)
}

Crafty.math.Vector2D.prototype.rotateDeg = function(deg){
  const { x, y } = this
  const rad = deg.toRad()
  const x2 = Math.cos(rad) * x - Math.sin(rad) * y
  const y2 = Math.sin(rad) * x + Math.cos(rad) * y
  return new Crafty.math.Vector2D(x2, y2)
}
