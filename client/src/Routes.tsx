import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Dog from './components/Views/Dog'
import Dogs from './components/Views/Dogs'
import Home from './components/Views/Home'
import Login from './components/Views/Login'
import Calendar from './components/Calendar'

import { CHECK_AUTH } from './gql/queries'
import { ProtectedRouteProps } from './types'
import AuthStorage from './util/AuthStorage'

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const history = useHistory()
  const { loading, called, data } = useQuery(CHECK_AUTH, { fetchPolicy: 'network-only' })
  const isAuth: string | null = called && !loading && data && data.me ? data.me.id : null

  if (called && !loading && !data) {
    AuthStorage.removeAccessToken()
    history.push('/login')
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Route
      {...rest}
      render={(props) => (isAuth ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
    />
  )
}

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path='/dogs' component={Dogs} />
    <ProtectedRoute exact path='/dog/:dogId' component={Dog} />
    <ProtectedRoute exact path='/dog/:dogId/calendar' component={Calendar} />
    <Route exact path='/login' component={Login} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
