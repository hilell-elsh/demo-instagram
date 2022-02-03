import { Link } from 'react-router-dom'
import UserPosts from './UserPosts'
import { Links, Posts } from './ProfileStyle'
import { useEffect } from 'react'

export default function ProfilePosts({user}) {
    let userPosts
    useEffect( async() => {
       userPosts = getUserPosts(user._id)  
    }, [user])

    return (
        <PostsWrapper>
            <Links>
                <Link to="/:username/">POSTS</Link>
                <Link to="/:username/saved">SAVED</Link>
                <Link to="/:username/tagged">TAGGED</Link>
            </Links>
            <Posts>
                <UserPosts posts={userPosts}/>
            </Posts>
        </PostsWrapper>
    )
}
