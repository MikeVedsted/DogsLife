import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

const Navigation = () => {
  const context = useContext(AuthContext)
  console.log(context)
  console.log('bool', context.id && true)

  return (
    <nav
      style={{
        width: '100%',
        maxWidth: '100vw',
        height: '60px',
        zIndex: 100,
        backgroundColor: 'DarkSlateGray',
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
        Home
      </Link>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/dogs'>
        My dogs
      </Link>
      {context.id ? (
        <p>logged in as {context.name}</p>
      ) : (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/login'>
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navigation
