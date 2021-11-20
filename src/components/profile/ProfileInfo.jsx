import { Link } from 'react-router-dom'
import { getUser } from '../../services/user-data'
import Avatar from '@mui/material/Avatar';
import { Username, InfoWrapper, Button, Count } from './ProfileStyle'

const userProfile = getUser().profile
const userAvatar = <Avatar 
                        alt={userProfile.name.firstName + " " + userProfile.name.lastName}   
                        src={userProfile.image.src}
                        sx={{ width: 164, height: 164 }} />

export default function ProfileInfo() {

    return (
    <>
        <InfoWrapper>
            {userAvatar}
            <Username>{userProfile.username}</Username>
            <Count>{userProfile.posts.myPosts.total} <span>posts</span></Count>
            <Count>{userProfile.followers.total} <span>followers</span></Count>
            <Count>{userProfile.following.total} <span>following</span></Count>
            <Link to="/profile/edit">
                <Button>Edit Profile</Button>
            </Link>  
        </InfoWrapper>
    </>
    )
}