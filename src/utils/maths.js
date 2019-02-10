/* eslint-disable-next-line */
Number.prototype.toDeg = function () {
  return this * (180 / Math.PI)
}

/* eslint-disable-next-line */
Number.prototype.toRad = function () {
  return this * (Math.PI / 180)
}

Math.randomRange = function (min, max) {
  return Math.random() * (max - min) + min
}
