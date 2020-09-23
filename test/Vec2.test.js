import kannwas from '../src/kannwas.mjs'

test('default values are 0, 0', () => {
  const vec = new kannwas.math.Vec2()

  expect(vec.x).toBe(0)
  expect(vec.y).toBe(0)
})

test('new Vec(x, y) throws error if x or y is not a number or bigint', () => {
  expect(() => new kannwas.math.Vec2("hello", 0))
    .toThrow('new Vec2(x, y): "parameter x and y must be of type number or bigint')

    expect(() => new kannwas.math.Vec2("hello", [0, 0]))
    .toThrow('new Vec2(x, y): "parameter x and y must be of type number or bigint')

    expect(() => new kannwas.math.Vec2(0, null))
    .toThrow('new Vec2(x, y): "parameter x and y must be of type number or bigint')
})

test('Vec.add', () => {
  const vec = new kannwas.math.Vec2(0, 0)
  
  vec
    .add(1, 1)
    .add([1, 1])
    .add(new kannwas.math.Vec2(1, 1))

  expect(vec.x).toBe(3)
  expect(vec.y).toBe(3)

  vec.add(null, null)

  expect(vec.x).toBe(3)
  expect(vec.y).toBe(3)
})
