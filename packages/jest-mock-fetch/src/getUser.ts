type User = {
  id: number
  username: string
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`)
  return res.json()
}
