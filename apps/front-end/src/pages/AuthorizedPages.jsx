import { Switch, Route } from 'react-router-dom'

import PageFeed from './authorized/Feed'
import Profile from './authorized/Profile'
import Mailbox from './authorized/Mailbox'
import Settings from './authorized/Settings'
import Header from '../components/global/Header'

export default function AuthorizedPages() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <PageFeed />
                </Route>
                <Route path="/:username">
                    <Profile />
                </Route>
                <Route path="/mailbox">
                    <Mailbox />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
            </Switch>
        </>
    )
}
