import styled from "styled-components"

export const FormWrapper = styled.form`
    min-width: 25vw;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
`
export const Logo = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const FormInput = styled.input`
    width: 80%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
`
export const FormButton = styled.button`
    width: 80%;
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 40px;
    color: white;
    font-weight: bold;
    background-color: rgb(0,149,246);
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 500ms ease-in-out;

    &:hover {
        background-color: #63c0fd;
    }
`
export const SignUpLink = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ddd; 
    border-radius: 5px;
    background-color: #fff;
`