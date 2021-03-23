import useInput from '../../../hooks/useInput'

const LoginForm = () => {
  const email = useInput('email')
  const password = useInput('password')

  const login = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(email.value, password.value)
  }

  return (
    <form onSubmit={login}>
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
