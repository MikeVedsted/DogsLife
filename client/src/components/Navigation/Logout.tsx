import { useLogin } from '../../hooks/useLogin'

const Logout = () => {
  const { logout } = useLogin()
  return <p onClick={logout}>Log out</p>
}

export default Logout
