import { Switch, Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Dog from './components/Views/Dog'
import Login from './components/Views/Login'
import Calendar from './components/Calendar'
import DogOverview from './components/Views/Dogs'
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
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  )
}

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path='/dog/:dogId' component={Dog} />
    <Route exact path='/dog/:dogId/calendar' component={Calendar} />
    <Route exact path='/login' component={Login} />
    <Route path='/' component={DogOverview} />
  </Switch>
)

export default Routes
