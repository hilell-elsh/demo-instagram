import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthorizedPages from './pages/AuthorizedPages'
import UnauthorizedPages from './pages/UnauthorizedPages'

// require('dotenv').config();

function App() {
    const isLoggedIn = useSelector((state) => state.user.isUser)
    return (
        <Router>
            {isLoggedIn ? <AuthorizedPages /> : <UnauthorizedPages />}
        </Router>
    )
}

export default App
