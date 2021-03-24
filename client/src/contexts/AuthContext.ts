import { createContext } from 'react'

import AuthStorage from '../util/AuthStorage'
import { AuthContextObject } from '../types'

const init: AuthContextObject = {
  token: AuthStorage.getAccessToken() || ''
}

const AuthContext = createContext<AuthContextObject>(init)

export default AuthContext
