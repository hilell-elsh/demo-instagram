import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { ModalBackdrop, ModalWrapper, ModalHeader, ModalContent, ModalContentItem, RemoveButton, ExitButton } from '../global/ModalStyle'
import { buttonOpen, buttonClose } from '../../store/button'
import { modalClose } from '../../store/modal'
import { getUser } from '../../services/user-data'

export default function FollowerModal({title}) {
    const userFollowers = getUser().profile.followers
    const userFollowing = getUser().profile.following

    const isButton = useSelector((state) => state.button.isButton)
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
                <ExitButton className="fas fa-times" onClick={() => dispatch(modalClose())}></ExitButton>
            </ModalHeader>
            <ModalContent>
                {usersList.map((username, index) => (
                    <ModalContentItem key={index}>
                        <Avatar src={username.image.src} sx={{ width: 40, height: 40 }}/>
                        <Link to={`/${username.username}/profile`}>
                            {username.username}
                        </Link>
                        <p>{username.name.firstName + " " + username.name.lastName}</p>
                        <RemoveButton className="fas fa-trash" onClick={() => dispatch(buttonOpen())}></RemoveButton>
                        { isButton && <ExitButton className="fas fa-times" onClick={() => dispatch(buttonClose())} style={{opacity: .6}}></ExitButton> }
                    </ModalContentItem>
                ))}
            </ModalContent>
        </ModalWrapper>
    </ModalBackdrop>
    )
}

// on unfollow button click => 2 buttons: v or x
// x => cancel v => unfollow