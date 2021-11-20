import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from './components/Header'
import Mailbox from './pages/Mailbox'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
        {/* <Header /> */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/mailbox">
          <Mailbox />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  )
}

export default App
