import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { signup } from '../../services/auth-service'

import {
    Logo,
    Form,
    FormInput,
    SignUpLink,
    FormWrapper,
    FormButton,
} from './FormStyle'

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
        event.preventDefault()
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

    const [passwordVisible, setPasswordVisible] = useState(false)
    function toggleVisibility() {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <FormWrapper>
            <Form onSubmit={signupHandler}>
                <Logo>Kilogram</Logo>
                <SecondaryTitle>
                    No photos of people "training" in <br /> the gym on this
                    app...
                </SecondaryTitle>
                <label>
                    <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </label>
                <label>
                    <FormInput
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        required
                    />
                </label>
                <label>
                    <FormInput
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                    />
                </label>
                <label>
                    <FormInput
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <i
                        className={
                            passwordVisible ? 'far fa-eye' : 'far fa-eye-slash'
                        }
                        onClick={() => toggleVisibility()}
                    ></i>
                </label>
                <FormButton type="submit">Sign Up</FormButton>
                <SmallText>
                    By signing up you agree to our Terms,
                    <br /> Data Policy and Cookies Policy.
                </SmallText>
            </Form>
            <SignUpLink>
                <p>
                    Have an account? <Link to="/login">Log in</Link>
                </p>
            </SignUpLink>
        </FormWrapper>
    )
}
