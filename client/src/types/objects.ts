export type Dog = {
  id: string
  name: string
}

export type AllDogsCache = {
  allDogs: Array<Dog>
}

export type AuthContextObject = {
  token: string
}