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

      throw new Error (
        'new Vec2(x, y): "parameter x and y must be of type number or bigint"'
      )
    }
  }

  get x () {
    return _private.get(this).x
  }

  get y () {
    _private.get(this).y
  }

  set x (v) {
    if (_isBigIntOrNumber(v)) {
      _private.get(this).x = v
    } else {

      throw new Error (
        'Vec2.x: "x must be of type number or bigint"'
      )
    }
  }

  set y (v) {
    if (_isBigIntOrNumber(v)) {
      _private.get(this).y = v
    } else {

      throw new Error (
        'Vec2.y: "y must be of type number or bigint"'
      )
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
}
