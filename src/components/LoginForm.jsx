import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="login">
            <form>
                <h1>Instagram</h1>
                <label>
                    <input type="text" placeholder="Phone number, username or email" required />
                </label>
                <label>
                    <input type="password" placeholder="Password" required />
                </label>
                <button type="submit">Log In</button>
            </form>
            <div className="no-account">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    )
}