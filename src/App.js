import './App.css'

import {Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'

import Home from './components/Home'

import UserProfile from './components/UserProfile'

import MyProfile from './components/Myprofile'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={Home} />
    <Route exact path="/users/:id" component={UserProfile} />
    <Route exact path="/my-profile" component={MyProfile} />
  </Switch>
)

export default App
