import { useMutation } from '@apollo/client'

import { LOGIN } from '../../../gql/mutations'
import useInput from '../../../hooks/useInput'

const LoginForm = () => {
  const email = useInput('email')
  const password = useInput('password')
  const [login] = useMutation(LOGIN)

  const submitLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await login({ variables: { 
        email: email.value, 
        password: password.value 
      }})
    } catch(e: unknown) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={submitLogin}>
      <label>
        Email
        <input {...email} />
      </label>
      <label>
        Password
        <input {...password} />
      </label>
      <button>Login</button>
    </form>
  )
}

export default LoginForm
