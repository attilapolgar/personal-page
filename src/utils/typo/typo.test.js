import { replaceAt, typo } from './typo'

test('typo', () => {
  expect(replaceAt('string', 1, 'X')).toBe('sXring')
})

describe('type', () => {
  it('should return a different string', () => {
    const original = "Let's test this"
    const result = typo(original)
    expect(original).not.toBe(result)
  })
})
