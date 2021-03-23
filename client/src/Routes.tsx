import { Switch, Route } from 'react-router-dom'

import Dog from './components/Views/Dog'
import Calendar from './components/Calendar'
import DogOverview from './components/Views/DogOverview'

const Routes = () => (
  <Switch>
    <Route exact path="/dog/:dogId" component={Dog} />
    <Route exact path="/dog/:dogId/calendar" component={Calendar} />
    <Route path="/" component={DogOverview} />
  </Switch>
)

export default Routes
