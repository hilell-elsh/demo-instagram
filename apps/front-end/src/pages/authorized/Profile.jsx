import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'

import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfilePosts from '../../components/profile/ProfilePosts'
import { Profile } from '../../components/profile/ProfileStyle.jsx'
import { getUserByUsername } from '../../services/user-data'

export default function ProfilePage() {
    const { username } = useParams()
    const abc = useSelector(
        (state) => state.user.user
        )
        console.log(abc);
    const loggedInUsername = useSelector(
        (state) => state.user.user.userBasicData.username
    )

    if (username === loggedInUsername) {
        user = useSelector((state) => state.user.user)
    } else {
        useEffect(async () => {
            user = await getUserByUsername(username)
        }, [])
    }

    return (
        <Profile>
            <ProfileInfo user={user}/>
            <ProfilePosts user={user}/>
        </Profile>
    )
}
