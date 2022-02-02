import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import AuthorizedPages from './pages/AuthorizedPages'
import UnauthorizedPages from './pages/UnauthorizedPages'

// require('dotenv').config();

function App() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.user.isUser)
    if (isLoggedIn) {dispatch(setMyData())}
    return (
        <Router>
            <UnauthorizedPages />
            <AuthorizedPages />
            <Redirect path="/" to="/login" />
        </Router>
    )
}

export default App
