import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import PageFeed from './authorized/Feed'
import Profile from './authorized/Profile'
import Mailbox from './authorized/Mailbox'
import Settings from './authorized/Settings'
import NewPostMobile from './authorized/NewPostMobile'
import Header from '../components/global/Navbar/Header'
import Footer from '../components/global/Navbar/Footer'
import { setMyData } from '../store/user'
import { useEffect } from 'react'

export default function AuthorizedPages() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(setMyData()), [])

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <PageFeed />
                </Route>
                <Route path="/mailbox">
                    <Mailbox />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/new-post">
                    <NewPostMobile />
                </Route>
                <Route path="/:username">
                    <Profile />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}
