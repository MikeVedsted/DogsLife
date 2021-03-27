export type Dog = {
  id: string
  name: string
  dob: string
}

export type MyDogsCache = {
  dogs: Array<Dog>
}

export type AuthContextObject = {
  token: string
}