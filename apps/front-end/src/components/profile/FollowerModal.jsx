import {useDispatch} from 'react-redux'

import { getUser } from '../../services/user-data'
import {ModalBackdrop, ModalWrapper, ModalHeader, ModalContent, ModalListItem} from '../global/ModalStyle'
import { modalActions } from '../../store/modal'

export default function FollowerModal(props) {
    const userFollowers = getUser().profile.followers.usernames
    const dispatch = useDispatch()
    
    return(
    <ModalBackdrop>
        <ModalWrapper>
            <ModalHeader>
                <p>{props.title}</p>
                <i className="fas fa-times" onClick={() => dispatch(modalActions.modalClose())}></i>
            </ModalHeader>
            <ModalContent>
                <ul>
                    {userFollowers.map((username) => {
                        <ModalListItem>{username.name}</ModalListItem>
                    })}
                </ul>
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}