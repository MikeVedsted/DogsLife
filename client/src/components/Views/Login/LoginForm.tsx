import useInput from '../../../hooks/useInput'
import { useLogin } from '../../../hooks/useLogin'
import { useHistory } from 'react-router'

const LoginForm = () => {
  const history = useHistory()
  const email = useInput('email')
  const password = useInput('password')
  const { login } = useLogin()

  const submitLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await login(email.value, password.value)
      history.push('/')
    } catch (error: unknown) {
      console.log(error)
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
