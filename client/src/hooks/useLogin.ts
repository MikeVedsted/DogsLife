import { useMutation, useApolloClient } from '@apollo/client'

import { LOGIN } from '../gql/mutations'
import AuthStorage from '../util/AuthStorage'

export const useLogin = () => {
  const [mutate] = useMutation(LOGIN)
  const apolloClient = useApolloClient()

  const login = async (email: string, password: string) => {
    const { data } = await mutate({ variables: { email, password } })
    AuthStorage.setAccessToken(data.login.value)
    await apolloClient.resetStore()
  }

  const logout = async () => {
    AuthStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return { login, logout }
}
