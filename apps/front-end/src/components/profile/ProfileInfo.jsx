import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { getUser } from '../../services/user-data'
import { Username, InfoWrapper, Button, Count } from './ProfileStyle'
import { modalOpen } from '../../store/modal'
import FollowerModal from './FollowerModal'

const userProfile = getUser().profile

export const userAvatar = <Avatar 
                        alt={userProfile.name.firstName + " " + userProfile.name.lastName}
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
            <Username>{userProfile.username}</Username>
            <Count>{userProfile.posts.myPosts.length} <span>posts</span></Count>
            <Count>{userProfile.followers.length} <span onClick={() => dispatch(modalOpen())}>followers</span></Count>
            <Count>{userProfile.following.length} <span onClick={() => dispatch(modalOpen())}>following</span></Count>
            { isModal && <FollowerModal title={title}/>}
            <Link to="/:username/settings">
                <Button>Edit Profile</Button>
            </Link>
        </InfoWrapper>
    )
}