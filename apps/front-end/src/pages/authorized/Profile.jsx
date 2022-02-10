import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfilePosts from '../../components/profile/ProfilePosts'
// import LoadingAnimation from '../../components/global/LoadingAnimation'
import { Profile } from '../../components/profile/ProfileStyle.jsx'
import { getUserByUsername } from '../../services/user-data'
import { loadingUser } from '../../store/user'

export default function ProfilePage() {
    const { username } = useParams()
    const [user, setUser] = useState({ ...loadingUser })
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserByUsername(username).then((res) => setUser(res))
        // setLoading(false)
    }, [username])

    return (
        <Profile>
            {/* {loading && <LoadingAnimation />} */}
            <ProfileInfo user={user} />
            <ProfilePosts userId={user._id} />
        </Profile>
    )
}
