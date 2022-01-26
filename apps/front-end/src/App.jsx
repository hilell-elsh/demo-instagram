import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isUser } from './store/user'
import { useEffect } from 'react'

import PageFeed from './pages/Feed'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Profile from './pages/Profile'
import Mailbox from './pages/Mailbox'
import Settings from './pages/Settings'
import { store } from './store'

// require('dotenv').config();

function App() {
    const state = store.getState();
    
    const isLoggedIn = useSelector((state) => state.user.isUser)
    return (
        <Router>
            <Switch>
                <Route path="/">
                    { isLoggedIn ? <PageFeed /> : <Login />}
                </Route>
                {/* <Route path="/login">
                    <Login />
                </Route> */}
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/:username">
                    <Route path="/:username/profile">
                        <Profile />
                    </Route>
                    <Route path="/:username/feed">
                        <PageFeed />
                    </Route>
                    <Route path="/:username/mailbox">
                        <Mailbox />
                    </Route>
                    <Route path="/:username/settings">
                        <Settings />
                    </Route>
                </Route>
                {/* <Redirect path="/" to="/:username/feed" /> */}
            </Switch>
        </Router>
    )
}

export default App