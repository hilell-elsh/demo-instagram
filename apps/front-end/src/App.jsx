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
// require('dotenv').config();

function App() {
    // const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.user.isUser)
    const username = useSelector((state) => state.user.user?.userBasicData?.username || {})
    console.log(`username: `+JSON.stringify(username));
    return (
        <Router>
            <Switch>
                <Route path="/">
                    { isLoggedIn ? window.location.pathname = `/${username}/feed` : <Login />}
                    {/* {!isLoggedIn && <Login />} */}
                </Route>
                {/* <Route path="/login">
                    <Login />
                </Route> */}
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/:username">
                    <Route path="/:username/profile">
                        {/* { !isLoggedIn && window.location.pathname = `/login`} */}
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