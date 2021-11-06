import { Link } from "react-router-dom";
import styled from "styled-components";
import {Logo, FormInput, SignUpLink, FormWrapper, FormButton} from "./FormStyle"

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
    return (
        <>
            <FormWrapper>
                <Logo>Kilogram</Logo>
                <SecondaryTitle>No photos of people "training" in <br/> the gym on this app...</SecondaryTitle>
                <FormInput type="text" placeholder="Mobile number or email" required />
                <FormInput type="text" placeholder="Full Name" required />
                <FormInput type="text" placeholder="Username" required />
                <FormInput type="password" placeholder="Password" required />
                <FormButton type="submit">Sign Up</FormButton>
                <SmallText>By signing up you agree to our Terms,<br/> Data Policy and Cookies Policy.</SmallText>
            </FormWrapper>
            <SignUpLink>
                <p>Have an account? <Link to="/login">Log in</Link></p>
            </SignUpLink>
        </>
    )
}