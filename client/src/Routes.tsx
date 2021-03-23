import { Switch, Route } from 'react-router-dom'

import Dog from './components/Views/Dog'
import Login from './components/Views/Login'
import Calendar from './components/Calendar'
import DogOverview from './components/Views/Dogs'

const Routes = () => (
  <Switch>
    <Route exact path='/dog/:dogId' component={Dog} />
    <Route exact path='/dog/:dogId/calendar' component={Calendar} />
    <Route exact path='/login' component={Login} />
    <Route path='/' component={DogOverview} />
  </Switch>
)

export default Routes
