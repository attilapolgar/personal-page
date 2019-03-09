import { replaceAt } from './typo'

test('typo', () => {
  expect(replaceAt('string', 1, 'X')).toBe('sXring')
})
