import styled from 'styled-components'
import { Button } from '../profile/ProfileStyle'

export const ModalBackdrop = styled.div`
    z-index: 3;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`

export const ModalWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 40vh;
    margin: 15% auto;
    background-color: #fefefe;
    border: 1px solid #afafaf;
    border-radius: 10px;
    `
    
    export const ModalHeader = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 7px;
    border-bottom: 1px solid #afafaf;
    border-radius: 10px 10px 0 0;
    background-color: #fefefe;
    
    & p {
        font-size: 18px;
        font-weight: 600;
        flex-grow: 1;
        text-align: center;
    }
    
    & .fa-times {
        padding: 0 auto;
        cursor: pointer;
    }
    `
    
    export const ModalContent = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    overflow: auto;
    `

export const ModalContentItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;

    & a {
        color: black;
        font-weight: 500;
    }

    & p {
        color: #8e8e8e;
        font-size: 0.8rem;
    }
`

export const ExitButton = styled.i`
    // transition: 500ms;
    cursor: pointer;
    font-size: 1.2rem;
    padding: .1rem;

    &:hover {
        color: #bbb;
    }
`

export const UploadButton = styled(Button)`
    max-width: 70%;
    margin-top: 1rem;
    background-color: #0095f6;
    color: #fff;
    border: 1px solid transparent;
`

export const RemoveButton = styled.i`
    color: #ff6b6b;
    cursor: pointer;
    transition: 500ms;

    &:hover {
        color: red;
        transition: 500ms;
    }
`
