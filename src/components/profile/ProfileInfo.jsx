// import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import { user } from '../../ex-apis/user'
import Avatar from '@mui/material/Avatar';
import { Username, InfoWrapper, Button, Count } from './ProfileStyle'

const userAvatar = <Avatar 
                        alt={user.profile.name.firstName+" "+user.profile.name.lastName}   
                        src={user.profile.image.src}
                        sx={{ width: 164, height: 164 }} />

export default function ProfileInfo() {
    return (
    <>
        <InfoWrapper>
            {userAvatar}
            <Username>{user.profile.username}</Username>
            <Count>{user.posts.myPosts.total} <span>posts</span></Count>
            <Count>{user.profile.followers.total} <span>followers</span></Count>
            <Count>{user.profile.following.total} <span>following</span></Count>
            <Link to="/profile/edit">
                <Button>Edit Profile</Button>
            </Link>  
        </InfoWrapper>
    </>
    )
}