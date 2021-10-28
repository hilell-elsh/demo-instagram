export default function SignUpForm() {
    return (
        <div className="sign-up">
            <form>
                <h1>Instagram</h1>
                <h2>Sign up to see photos and videos from your friends.</h2>
                <label>
                    <input type="text" placeholder="Mobile number or email" required />
                </label>
                <label>
                    <input type="text" placeholder="Full Name" required />
                </label>
                <label>
                    <input type="text" placeholder="Username" required />
                </label>
                <label>
                    <input type="password" placeholder="Password" required />
                </label>
                <button type="submit">Log In</button>
                <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
            </form>
        </div>
    )
}