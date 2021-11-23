import styled from 'styled-components'
import './display.css'

const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 40vh;
    margin: 15% auto;
    background-color: #fefefe;
    border: 1px solid #afafaf;
    border-radius: 10px;
`

const ModalHeader = styled.div`
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

const ModalContent = styled.div`

`

export default function FollowerModal(props) {

    return(
    <ModalBackdrop className={props.display}>
        <ModalWrapper>
            <ModalHeader>
                <p>{props.title}</p>
                <i className="fas fa-times" onClick={props.handleClose}></i>
            </ModalHeader>
            <ModalContent>

            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}