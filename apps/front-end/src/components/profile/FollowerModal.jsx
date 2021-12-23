import { useDispatch } from 'react-redux'

import { ModalBackdrop, ModalWrapper, ModalHeader, ExitButton, ModalContent } from '../global/ModalStyle'
import { modalClose } from '../../store/modal'
import { getUser } from '../../services/user-data'
import FollowerModalContentItem from './FollowerModalContentItem'

export default function FollowerModal({title}) {
    const userFollowers = getUser().profile.followers
    const userFollowing = getUser().profile.following
    
    function checkContent(title) {
        if(title === 'following') {
            return userFollowing
        } else if(title === 'followers') {
            return userFollowers
        }
    }
    const usersList = checkContent(title)

    const dispatch = useDispatch()
    
    return(
    <ModalBackdrop>
        <ModalWrapper>
            <ModalHeader>
                <p>{title}</p>
                <ExitButton className="fas fa-times" onClick={() => dispatch(modalClose())}></ExitButton>
            </ModalHeader>
            <ModalContent>
                {usersList.map((username, index) => (
                    <FollowerModalContentItem username={username} index={index}/>
                ))}
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}