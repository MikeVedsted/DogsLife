import { Switch, Route } from 'react-router-dom'

import Dog from './components/Dog'
import DogOverview from './components/DogOverview'

const Routes = () => (
  <Switch>
    <Route exact path="/dog/:dogId" component={Dog} />
    <Route path="/" component={DogOverview} />
  </Switch>
)

export default Routes
