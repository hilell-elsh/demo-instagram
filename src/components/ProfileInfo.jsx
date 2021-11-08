// import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import { user } from '../ex-apis/user'

export default function ProfileInfo() {
    return (
    <>
        <div>
            <h1>{user.profile.username}</h1>
            <Link to="/editprofile">
                <button>Edit Profile</button>
            </Link>    
            <button><i className="fas fa-sliders-h"></i></button>
            <p>{user.posts.myPosts.total} posts</p>
            <p>{user.profile.followers.total} followers</p>
            <p>{user.profile.following.total} following</p>
        </div>
    </>
    )
}