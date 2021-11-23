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
    
    const [display, setDisplay] = useState('none')
    const [title, setTitle] = useState('')
    
    const handleOpen = () => {
        setDisplay('block');
        setTitle(event.target.innerText)
    }

    const handleClose = () => setDisplay('none');

    // TRY IN REACT ------------------
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //       modal.style.display = "none";
    //     }
    //   } ------------------------------

    return (
    <>
        <InfoWrapper>
            {userAvatar}
            <Username>{userProfile.username}</Username>
            <Count>{userProfile.posts.myPosts.total} <span>posts</span></Count>
            <Count>{userProfile.followers.total} <span onClick={handleOpen}>followers</span></Count>
            <Count>{userProfile.following.total} <span onClick={handleOpen}>following</span></Count>
            <FollowerModal handleClose={handleClose} display={display} title={title}/>
            <Link to="/settings">
                <Button>Edit Profile</Button>
            </Link>  
        </InfoWrapper>
    </>
    )
}