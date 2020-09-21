import kannwas from '../src/kannwas.mjs'

test('default values are 0, 0', () => {
  const vec = new kannwas.math.Vec2();

  expect(vec.x).toBe(0)
  expect(vec.y).toBe(0)
})
