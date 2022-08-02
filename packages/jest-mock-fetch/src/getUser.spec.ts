import { getUser } from './getUser'

describe('getUser', () => {
  let originalFetch: typeof fetch

  beforeAll(() => {
    originalFetch = globalThis.fetch
  })
  afterAll(() => {
    globalThis.fetch = originalFetch
  })

  it('getUser 1', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve(new Response('{"id":1,"username":"alice"}'))
    })

    const user = await getUser(1)
    expect(global.fetch).toBeCalledTimes(1)
    expect(global.fetch).toBeCalledWith('https://dummyjson.com/users/1')
    expect(jest.mocked(fetch).mock.calls[0][0]).toBe('https://dummyjson.com/users/1')
    expect(user).toMatchObject({ id: 1, username: 'alice' })
  })

  it('getUser 2', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve(new Response('{"id":2,"username":"bob"}'))
    })

    const user = await getUser(2)
    expect(global.fetch).toBeCalledTimes(1)
    expect(global.fetch).toBeCalledWith('https://dummyjson.com/users/2')
    expect(jest.mocked(fetch).mock.calls[0][0]).toBe('https://dummyjson.com/users/2')
    expect(user).toMatchObject({ id: 2, username: 'bob' })
  })
})
