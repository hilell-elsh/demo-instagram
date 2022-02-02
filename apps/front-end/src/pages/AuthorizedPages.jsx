import { Switch, Route } from 'react-router-dom'

import PageFeed from './authorized/Feed'
import Profile from './authorized/Profile'
import Mailbox from './authorized/Mailbox'
import Settings from './authorized/Settings'
import Header from '../components/global/Header'

export default function AuthorizedPages() {
    return (
        <Switch>
            <Route path="/:username">
                <Header />
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
        </Switch>
    )
}
