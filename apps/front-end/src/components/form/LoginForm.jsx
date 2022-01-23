import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    Logo,
    FormInput,
    SignUpLink,
    FormWrapper,
    FormButton,
} from './FormStyle'

const SmallLink = styled.p`
    font-size: 12px;
`

export default function LoginForm() {
    return (
        <>
            <FormWrapper>
                <Logo>Kilogram</Logo>
                <FormInput
                    type="text"
                    placeholder="Phone number, username or email"
                    required
                />
                <FormInput type="password" placeholder="Password" required />
                <FormButton type="submit">Log In</FormButton>
                <Link to="/restorepassword">
                    <SmallLink>Forgot Password?</SmallLink>
                </Link>
            </FormWrapper>
            <SignUpLink>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </SignUpLink>
        </>
    )
}
