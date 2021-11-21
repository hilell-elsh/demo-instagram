import { BrowserRouter as Router, Switch, Route,  Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Kilogram from './pages/Kilogram'
import './styles/main.css'


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Kilogram">
            <Kilogram />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Redirect path="/" to="/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
