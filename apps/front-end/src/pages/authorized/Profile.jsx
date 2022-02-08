import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useEffect, useState} from 'react'

import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfilePosts from '../../components/profile/ProfilePosts'
import { Profile } from '../../components/profile/ProfileStyle.jsx'
import { getUserByUsername } from '../../services/user-data'

export default function ProfilePage() {
    const [user, setUser] = useState()
    const { username } = useParams()
    const loggedInUsername = useSelector(
        (state) => state.user.user.userBasicData.username
    )

    const getOtherUser = async () => {
        const res = await getUserByUsername(username)
        setUser(res)
    }

    if (username === loggedInUsername) {
        setUser(useSelector((state) => state.user.user))
    } else {
        useEffect(() => {
            getOtherUser(username)
        }, [])
    }

    return (
        <Profile>
            <ProfileInfo user={user}/>
            <ProfilePosts user={user}/>
        </Profile>
    )
}
