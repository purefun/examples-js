type User = {
  id: number
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`)
  const user = await res.json()
  return { id: user.id }
}
