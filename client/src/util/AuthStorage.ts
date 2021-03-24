const setAccessToken = (accessToken: string): void => {
  localStorage.setItem('dogslife:access-token', JSON.stringify(accessToken))
}

const getAccessToken = (): string => {
  const storedToken = localStorage.getItem('dogslife:access-token')
  return storedToken ? JSON.parse(storedToken) : ''
}

const removeAccessToken = (): void => {
  localStorage.removeItem('dogslife:access-token')
}

const AuthStorage = { getAccessToken, setAccessToken, removeAccessToken }

export default AuthStorage
