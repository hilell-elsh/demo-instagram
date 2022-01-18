import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { getUser, getUser2 } from '../../services/user-data'
import { Username, InfoWrapper, Button, Count } from './ProfileStyle'
import { modalOpen } from '../../store/modal'
import FollowerModal from './FollowerModal'

const user = await getUser2("61e3f85b5f5ab74cebc66d4e")

const userProfile = getUser().profile

export const userAvatar = <Avatar 
                        alt={user.additionalData.name.firstName + " " + user.additionalData.name.lastName}
                        src={userProfile.image.src}
                        sx={{ width: 164, height: 164 }}
/>

                        
export default function ProfileInfo() {
    const isModal = useSelector((state) => state.modal.isModal)
    const title = useSelector((state) => state.modal.title)
    const dispatch = useDispatch()
    
    return (
        <InfoWrapper>
            {userAvatar}
            <Username>{user.userBasicData.username}</Username>
            <Count>{user.posts.postsAmount} <span>posts</span></Count>
            <Count>{user.additionalData.followers} <span onClick={() => dispatch(modalOpen())}>followers</span></Count>
            <Count>{user.additionalData.following} <span onClick={() => dispatch(modalOpen())}>following</span></Count>
            { isModal && <FollowerModal title={title}/> }
            <Link to="/:username/settings">
                <Button>Edit Profile</Button>
            </Link>
        </InfoWrapper>
    )
}