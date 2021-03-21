import { Switch, Route } from 'react-router-dom'

import Dog from './components/Dog'
import DogCalendar from './components/DogCalendar'
import DogOverview from './components/DogOverview'

const Routes = () => (
  <Switch>
    <Route exact path="/dog/:dogId" component={Dog} />
    <Route exact path="/dog/:dogId/calendar" component={DogCalendar} />
    <Route path="/" component={DogOverview} />
  </Switch>
)

export default Routes
