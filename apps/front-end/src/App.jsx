import { BrowserRouter as Router } from 'react-router-dom'
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
        </Router>
    )
}

export default App
