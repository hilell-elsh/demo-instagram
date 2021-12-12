import {ModalBackdrop, ModalWrapper, ModalHeader, ModalContent} from '../global/ModalStyle'

export default function FollowerModal(props) {

    return(
    <ModalBackdrop>
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