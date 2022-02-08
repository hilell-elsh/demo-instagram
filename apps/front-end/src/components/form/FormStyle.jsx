import styled from 'styled-components'

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Form = styled.form`
    min-width: 25vw;
    margin-top: 20vh;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    && label {
        width: 80%;
        position: relative;
        display: flex;
        align-items: center;
    }
    && i {
        position: absolute;
        right: 10px;
    }
`
export const Logo = styled.h1`
    font-family: billabong;
    font-weight: 300;
    font-size: 64px;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const FormInput = styled.input`
    flex-grow: 1;
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
    background-color: rgb(0, 149, 246);
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 500ms ease-in-out;

    &:hover {
        background-color: #63c0fd;
    }
`
export const SignUpLink = styled.div`
    max-width: 25vw;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
`

export const EditWrapper = styled.form`
    padding-top: 40px;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & label {
        margin-top: 10px;
        width: 40vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
    }
`
