import { useDispatch } from 'react-redux'

import { getUser } from '../../services/user-data'
import {ModalBackdrop, ModalWrapper, ModalHeader, ModalContent} from '../global/ModalStyle'

export default function FollowerModal(props) {
    const userFollowers = getUser().profile.followers.usernames
    
    const dispatch = useDispatch

    return(
    <ModalBackdrop>
        <ModalWrapper>
            <ModalHeader>
                <p>{props.title}</p>
                <i className="fas fa-times" onClick={props.dispatch(modalClose)}></i>
            </ModalHeader>
            <ModalContent>
            
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}

// modal content items needs to come from the api that ha the same name as the modal title
// separate content to followers and following and implement each component according to the modal title
