import './App.css'

import {Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'

import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
