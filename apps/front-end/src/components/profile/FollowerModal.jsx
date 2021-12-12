import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar'

import { ModalBackdrop, ModalWrapper, ModalHeader, ModalContent, ModalContentItem } from '../global/ModalStyle'
import { getUser } from '../../services/user-data'
import { modalClose } from '../../store/modal'

export default function FollowerModal(props) {

    const userFollowers = getUser().profile.followers.usernames
    const dispatch = useDispatch()
    
    return(
    <ModalBackdrop>
        <ModalWrapper>
            <ModalHeader>
                <p>{props.title}</p>
                <i className="fas fa-times" onClick={() => dispatch(modalClose())}></i>
            </ModalHeader>
            <ModalContent>
                {userFollowers.map((username, index) => (
                    <ModalContentItem key={index}>
                        <Avatar src={username.image.src} sx={{ width: 40, height: 40 }}/>
                        <p>{username.name.firstName + " " + username.name.lastName}</p>
                    </ModalContentItem>
                ))}
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}

// modal content items needs to come from the api that ha the same name as the modal title