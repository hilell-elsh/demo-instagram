import { Link } from "react-router-dom"
import { useRef } from "react"
import styled from "styled-components"
import { signup } from "../../services/auth-service"

import { Logo, FormInput, SignUpLink, FormWrapper, FormButton } from "./FormStyle"

const SecondaryTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: #9c8e8e;
    text-align: center;
    margin-bottom: 10px;
`
const SmallText = styled.p`
    font-size: 12px;
    text-align: center;
`

export default function SignUpForm() {

    async function signupHandler(event) {
        event.preventDefault();
        const data = new FormData(event.target)
        data.set('email', data.get('email'))
        data.set('fullname', data.get('fullname'))
        data.set('username', data.get('username'))
        data.set('password', data.get('password'))
        let signupData = {}
        data.forEach((value, key) => {
            signupData[key] = value
        })
        const newUser = await signup(signupData)
        if (newUser) {
            window.location.pathname = '/'
        }
    }

    return (
        <>
            <FormWrapper onSubmit={signupHandler}>
                <Logo>Kilogram</Logo>
                <SecondaryTitle>No photos of people "training" in <br/> the gym on this app...</SecondaryTitle>
                <FormInput type="email" name="email" placeholder="Email" required />
                <FormInput type="text" name="fullname" placeholder="Full Name" required />
                <FormInput type="text" name="username" placeholder="Username" required />
                <FormInput type="password" name="password" placeholder="Password" required />
                <FormButton type="submit">Sign Up</FormButton>
                <SmallText>By signing up you agree to our Terms,<br/> Data Policy and Cookies Policy.</SmallText>
            </FormWrapper>
            <SignUpLink>
                <p>Have an account? <Link to="/login">Log in</Link></p>
            </SignUpLink>
        </>
    )
}