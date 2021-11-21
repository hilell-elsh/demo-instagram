import { BrowserRouter as Router, Switch, Route,  Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Mailbox from './Mailbox'
import Profile from './Profile'
import Settings from './Settings'
import PageFeed from './Feed'

export default function kilogram() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/kilogram/feed">
                    <PageFeed />
                </Route>
                <Route path="/kilogram/mailbox">
                    <Mailbox />
                </Route>
                <Route path="/kilogram/profile">
                    <Profile />
                </Route>
                <Route path="/kilogram/settings">
                    <Settings />
                </Route>    
            </Switch>
        </div>    
    )
}