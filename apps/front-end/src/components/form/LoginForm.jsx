import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    FormWrapper,
    Logo,
    FormInput,
    SignUpLink,
    Form,
    FormButton,
} from './FormStyle'
import { login } from "../../services/auth-service"
import { setIsUser, setMyData } from '../../store/user'

const SmallLink = styled.p`
    font-size: 12px;
    `

export default function LoginForm() {
    const dispatch = useDispatch()
    async function loginHandler(event) {
        event.preventDefault();
        const data = new FormData(event.target)
        data.set('username', data.get('username'))
        data.set('password', data.get('password'))
        let loginData = {}
        data.forEach((value, key) => {
            loginData[key] = value
        })
        const isUser = await login(loginData)
        if (isUser) {
            dispatch(setMyData())
            dispatch(setIsUser(true))
        }
    }

    const [passwordVisible, setPasswordVisible] = useState(false)
    function toggleVisibility() {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <FormWrapper>
            <Form onSubmit={loginHandler}>
                <Logo>Kilogram</Logo>
                <label>
                    <FormInput
                        name="username"
                        type="text"
                        placeholder="username"
                        required
                    />
                </label>
                <label>
                    <FormInput name="password" type={passwordVisible ? "text" : "password"} placeholder="Password" required />
                    <i className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"} onClick={() => toggleVisibility()}></i>
                </label>
                <FormButton type="submit">Log In</FormButton>
                <Link to="/restorepassword">
                    <SmallLink>Forgot Password?</SmallLink>
                </Link>
            </Form>
            <SignUpLink>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </SignUpLink>
        </FormWrapper>
    )
}
