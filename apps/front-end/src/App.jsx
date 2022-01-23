import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import PageFeed from './pages/Feed'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Profile from './pages/Profile'
import Mailbox from './pages/Mailbox'
import Settings from './pages/Settings'
// require('dotenv').config();

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
                <Redirect path="/" to="/login" />
            </Switch>
        </Router>
    )
}

export default App
