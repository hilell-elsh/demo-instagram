import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Links, Posts, PostsWrapper } from './ProfileStyle'
import { getUserPosts } from '../../services/user-data'
import UserPosts from './UserPosts'

export default function ProfilePosts({ user }) {
    const [userPosts, setUserPosts] = useState({
        myPosts: [],
        taggedPosts: [],
        savedPosts: [],
    })
    useEffect(() => {
        void (async () => {
            setUserPosts(await getUserPosts(user._id))
        })()
    }, [])

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
