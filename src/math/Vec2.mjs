import createEveryTest from './../util/createEveryTest.mjs'

const _isBigIntOrNumber =
  createEveryTest([
    v => typeof v === 'number' || typeof v === 'bigint'
  ])

const _isArrayAtLeastLen2 =
  createEveryTest([
    v => Array.isArray(v),
    v => v.length >= 2
  ])

const _private = new WeakMap()

export default class Vec2 {
  constructor (x = 0, y = 0) {
    if (_isBigIntOrNumber(x) && _isBigIntOrNumber(y)) {
      _private.set(this, {
        x,
        y
      })
    } else {
      throw new Error('new Vec2(x, y): "parameter x and y must be of type number or bigint"')
    }
  }

  static random (rdnFn = Math.random) {
    if (typeof rdnFn === 'function' && _isBigIntOrNumber(rdnFn())) {
      return new Vec2(rdnFn(), rdnFn())
    } else {
      throw new Error('Vec2.random(rdnFn): "rdnFn must be a function wich returns a value of type number or bigint"')
    }
  }

  get x () {
    return _private.get(this).x
  }

  get y () {
    return _private.get(this).y
  }

  set x (v) {
    if (_isBigIntOrNumber(v)) {
      _private.get(this).x = v
    } else {
      throw new Error('Vec2.x: "x must be of type number or bigint"')
    }
  }

  set y (v) {
    if (_isBigIntOrNumber(v)) {
      _private.get(this).y = v
    } else {
      throw new Error('Vec2.y: "y must be of type number or bigint"')
    }
  }

  add (a, b = null) {
    if (
      _isBigIntOrNumber(a) &&
      _isBigIntOrNumber(b)
    ) {
      this.x += a
      this.y += b

      return this
    }

    if (a instanceof Vec2) {
      this.x += a.x
      this.y += a.y

      return this
    }

    if (b === null && _isBigIntOrNumber(a)) {
      this.x += a
      this.y += a

      return this
    }

    if (
      b === null &&
      _isArrayAtLeastLen2(a)
    ) {
      this.x += a[0]
      this.y += a[1]

      return this
    }
  }

  sub (a, b = null) {
    if (
      _isBigIntOrNumber(a) &&
      _isBigIntOrNumber(b)
    ) {
      this.x -= a
      this.y -= b

      return this
    }

    if (a instanceof Vec2) {
      this.x -= a.x
      this.y -= a.y

      return this
    }

    if (b === null && _isBigIntOrNumber(a)) {
      this.x -= a
      this.y -= a

      return this
    }

    if (
      b === null &&
      _isArrayAtLeastLen2(a)
    ) {
      this.x -= a[0]
      this.y -= a[1]

      return this
    }
  }

  mul (a, b = null) {
    if (
      _isBigIntOrNumber(a) &&
      _isBigIntOrNumber(b)
    ) {
      this.x *= a
      this.y *= b

      return this
    }

    if (a instanceof Vec2) {
      this.x *= a.x
      this.y *= a.y

      return this
    }

    if (b === null && _isBigIntOrNumber(a)) {
      this.x *= a
      this.y *= a

      return this
    }

    if (
      b === null &&
      _isArrayAtLeastLen2(a)
    ) {
      this.x *= a[0]
      this.y *= a[1]

      return this
    }
  }

  div (a, b = null) {
    if (
      _isBigIntOrNumber(a) &&
      _isBigIntOrNumber(b)
    ) {
      this.x /= a
      this.y /= b

      return this
    }

    if (a instanceof Vec2) {
      this.x /= a.x
      this.y /= a.y

      return this
    }

    if (b === null && _isBigIntOrNumber(a)) {
      this.x /= a
      this.y /= a

      return this
    }

    if (
      b === null &&
      _isArrayAtLeastLen2(a)
    ) {
      this.x /= a[0]
      this.y /= a[1]

      return this
    }
  }

  clone () {
    return new Vec2(this.x, this.y)
  }

  len () {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  sqrLen () {
    return this.x ** 2 + this.y ** 2
  }

  setDir (angle, dist) {
    if (_isArrayAtLeastLen2(angle) && _isArrayAtLeastLen2(dist)) {
      this.x = dist * Math.cos(angle / 360 * Math.PI * 2)
      this.y = dist * Math.sin(angle / 360 * Math.PI * 2)
    }

    return this
  }

  scale (f) {
    if (_isBigIntOrNumber(f)) {
      this.x *= f
      this.y *= f
    }

    return this
  }

  distance (other) {
    if (other instanceof Vec2) {
      const dx = other.x - this.x
      const dy = other.y - this.y

      return Math.sqrt(dx ** 2 + dy ** 2)
    }
  }

  sqrDistance (other) {
    if (other instanceof Vec2) {
      const dx = other.x - this.x
      const dy = other.y - this.y

      return dx ** 2 + dy ** 2
    }
  }

  dot (other) {
    if (other instanceof Vec2) {
      return this.x * other.x + this.y * other.y
    }
  }

  normalize () {
    const len = this.len()
    len > 0 && this.scale(1 / len)

    return this
  }

  limit (f) {
    if (_isBigIntOrNumber(f)) {
      const len = this.len()
      len > f && len > 0 && this.scale(f / len)
    }

    return this
  }

  toString () {
    return `Vec2(${this.x}, ${this.y})`
  }
}
