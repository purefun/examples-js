import fetch from 'node-fetch'
import { getUser } from './getUser'

// @ts-ignore
globalThis.fetch = fetch

async function main() {
  const user = await getUser(1)
  console.log({ user })
}

main()
