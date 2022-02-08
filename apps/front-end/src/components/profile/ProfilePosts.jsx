import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Links, Posts, PostsWrapper } from './ProfileStyle'
import { getUserPosts } from '../../services/user-data'
import UserPosts from './UserPosts'

export default function ProfilePosts({ user }) {
    const { username } = useParams()
    const [userPosts, setUserPosts] = useState(user.posts.firstPosts)

    useEffect(() => {
        getUserPosts(user._id).then((res) => {
            setUserPosts(res)
        })
    }, [username])
    console.log(userPosts)
    
    return (
        <PostsWrapper>
            <Links>
                <Link to="/:username/">POSTS</Link>
                <Link to="/:username/saved">SAVED</Link>
                <Link to="/:username/tagged">TAGGED</Link>
            </Links>
            <Posts>
                <UserPosts userPosts={userPosts} />
            </Posts>
        </PostsWrapper>
    )
}
