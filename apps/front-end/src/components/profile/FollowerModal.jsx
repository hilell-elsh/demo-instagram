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
                <ul>
                    {userFollowers.map((username) => {
                        <li>{username}</li>
                    })}
                </ul>
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}