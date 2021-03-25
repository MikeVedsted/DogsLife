import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
      <p>Don't have an account? Sign up below!</p>
      <SignUpForm />
    </>
  )
}

export default Login
