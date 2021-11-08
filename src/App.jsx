import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
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
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>  
  )
}

export default App
