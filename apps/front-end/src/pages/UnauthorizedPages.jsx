import { Switch, Route } from 'react-router-dom'

import Signup from './unauthorized/SignUp'
import Login from './unauthorized/Login'

export default function UnauthorizedPages() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
        </Switch>
    )
}
