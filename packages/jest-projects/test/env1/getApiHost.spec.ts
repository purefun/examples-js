import { getApiHost } from '../../src/getApiHost'

test('getApiHost', () => {
  expect(getApiHost()).toBe('api1.example.com')
})
