import styled from 'styled-components'

export const ModalBackdrop = styled.div`
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

export const ModalWrapper = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 40vh;
    margin: 15% auto;
    background-color: #fefefe;
    border: 1px solid #afafaf;
    border-radius: 10px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7px;
    border-bottom: 1px solid #afafaf;

    & p {
        font-size: 16px;
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
    padding: 1rem;
`

export const ModalContentItem = styled.div`
    display: flex;
    align-items: center;
    margin: .5rem 0;

    & p {
        margin-left: 1rem;
    }
`
