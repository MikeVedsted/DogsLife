import { Switch, Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Dog from './components/Views/Dog'
import Dogs from './components/Views/Dogs'
import Home from './components/Views/Home'
import Login from './components/Views/Login'
import Calendar from './components/Calendar'

import { CHECK_AUTH } from './gql/queries'
import { ProtectedRouteProps } from './types'

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const { loading, called, data } = useQuery(CHECK_AUTH, { fetchPolicy: 'network-only' })
  let isAuth: string | null = called && !loading && data.me ? data.me.id : null

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
    <ProtectedRoute exact path='/login' component={Login} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
