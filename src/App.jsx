import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import Mailbox from './pages/Mailbox'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/mailbox">
            <Mailbox />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
