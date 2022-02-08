import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfilePosts from '../../components/profile/ProfilePosts'
import { Profile } from '../../components/profile/ProfileStyle.jsx'
import { getUserByUsername } from '../../services/user-data'
import { defaultUser } from '../../store/user'

export default function ProfilePage() {
    const { username } = useParams()
    const loggedInUser = useSelector((state) => state.user.user)
    const [user, setUser] = useState({ ...defaultUser })

    if (username === loggedInUser.userBasicData.username) {
        setUser({ ...loggedInUser })
    } else {
        useEffect(() => {
            ;(async () => {
                setUser(await getUserByUsername(username))
            })()
        }, [])
    }

    return (
        <Profile>
            <ProfileInfo user={user} />
            <ProfilePosts user={user} />
        </Profile>
    )
}
