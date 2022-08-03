import { getApiHost } from '../../src/getApiHost'

test('getApiHost', () => {
  expect(getApiHost()).toBe('api2.example.com')
})
