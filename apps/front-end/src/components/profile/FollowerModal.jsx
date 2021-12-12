import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { ModalBackdrop, ModalWrapper, ModalHeader, ModalContent, ModalContentItem } from '../global/ModalStyle'
import { modalClose } from '../../store/modal'
import { Button } from './ProfileStyle'
import { getUser } from '../../services/user-data'

export default function FollowerModal({title}) {
    const userFollowers = getUser().profile.followers
    const userFollowing = getUser().profile.following

    const dispatch = useDispatch()

    function checkContent(title) {
        if(title === 'following') {
            return userFollowing
        } else if(title === 'followers') {
            return userFollowers
        }
    }
    const usersList = checkContent(title)
    
    return(
    <ModalBackdrop>
        <ModalWrapper>
            <ModalHeader>
                <p>{title}</p>
                <i className="fas fa-times" onClick={() => dispatch(modalClose())}></i>
            </ModalHeader>
            <ModalContent>
                {usersList.map((username, index) => (
                    <ModalContentItem key={index}>
                        <Avatar src={username.image.src} sx={{ width: 40, height: 40 }}/>
                        <Link to={`/${username.username}/profile`}>
                            {username.username}
                        </Link>
                        <p>{username.name.firstName + " " + username.name.lastName}</p>
                        <i className="fas fa-trash" onClick={() => dispatch(modalOpen())}></i>
                    </ModalContentItem>
                ))}
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}

// on unfollow button click => 2 buttons: v or x
// x => cancel v => unfollow