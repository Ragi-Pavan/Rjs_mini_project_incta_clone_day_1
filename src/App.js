import './App.css'

import {Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'

import Home from './components/Home'

import UserProfile from './components/UserProfile'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={UserProfile} />
  </Switch>
)

export default App
