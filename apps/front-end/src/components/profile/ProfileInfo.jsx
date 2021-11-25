import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../services/user-data'
import Avatar from '@mui/material/Avatar'

import { Username, InfoWrapper, Button, Count } from './ProfileStyle'
import FollowerModal from './FollowerModal'

const userProfile = getUser().profile
const userAvatar = <Avatar 
                        alt={userProfile.name.firstName + " " + userProfile.name.lastName}
                        src={userProfile.image.src}
                        sx={{ width: 164, height: 164 }}
/>

                        
export default function ProfileInfo() {
    // move to store ---------------------------
    const [display, setDisplay] = useState(false)
    const [title, setTitle] = useState('')
    
    const handleOpen = () => {
        setDisplay(true);
        setTitle(event.target.innerText)
    }

    const handleClose = () => setDisplay(false);
    // -----------------------------------------
    return (
    <>
        <InfoWrapper>
            {userAvatar}
            <Username>{userProfile.username}</Username>
            <Count>{userProfile.posts.myPosts.total} <span>posts</span></Count>
            <Count>{userProfile.followers.total} <span onClick={handleOpen}>followers</span></Count>
            <Count>{userProfile.following.total} <span onClick={handleOpen}>following</span></Count>
            { display && <FollowerModal handleClose={handleClose} display={display} title={title}/>}
            <Link to="/:username/settings">
                <Button>Edit Profile</Button>
            </Link>
        </InfoWrapper>
    </>
    )
}