import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import {
    Logo,
    FormInput,
    SignUpLink,
    FormWrapper,
    FormButton,
} from './FormStyle'
import { login } from "../../services/auth-service"
import { getMe } from "../../services/my-data"
import { setCurUser } from '../../store/user'
import { store } from '../../store'

const SmallLink = styled.p`
    font-size: 12px;
    `

export default function LoginForm() {
    const state = store.getState();
    const dispatch = useDispatch()
    const stateUser = useSelector((state) => state.user.user)
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
            const user = await getMe()
            // console.log(user);
            dispatch(setCurUser(user))
            console.log('state.user')
            // console.log(store.getState().user);
            // console.log(stateUser);
        }
    }
    return (
        <>
            <FormWrapper onSubmit={loginHandler}>
                <Logo>Kilogram</Logo>
                <FormInput
                    name="username"
                    type="text"
                    placeholder="username"
                    required
                />
                <FormInput name="password" type="password" placeholder="Password" required />
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
