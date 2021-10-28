import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <SignUpForm />
            <div className="have-account">
                <p>Have an account? <Link to="/login">Log in</Link></p>
            </div>
        </>
    )
}