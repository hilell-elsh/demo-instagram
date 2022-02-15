import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { AnimatePresence } from 'framer-motion'

import { Username, Info, Button, Count } from './ProfileStyle'
import { modalOpen } from '../../store/modal'
import FollowerModal from './FollowerModal'
import { toggleFollowUser, checkIsFollowing } from '../../services/user-data'

export default function ProfileInfo({ user, usernameParam }) {
    const myUsername = useSelector(
        (state) => state.user.user.userBasicData.username
    )
    const [isFollowing, setIsFollowing] = useState(false)
    const [followersCount, setFollowersCount] = useState(0)

    useEffect(async () => {
        await setIsFollowing(checkIsFollowing(user._id))
        setFollowersCount(user.additionalData.followers)
    }, [user])

    async function renderInfoButton() {
        if (myUsername === usernameParam) {
            return (
                <Link to="/settings">
                    <Button>Edit Profile</Button>
                </Link>
            )
        } else if (isFollowing) {
            return (
                <Button
                    onClick={() => {
                        toggleFollowUser(user._id)
                        setIsFollowing(false)
                        setFollowersCount(followersCount - 1)
                    }}
                >
                    Unfollow
                </Button>
            )
        } else {
            return (
                <Button
                    onClick={() => {
                        toggleFollowUser(user._id)
                        setIsFollowing(true)
                        setFollowersCount(followersCount + 1)
                    }}
                >
                    Follow
                </Button>
            )
        }
    }
    const [infoButton, setInfoButton] = useState(null)
    useEffect(async () => {
        setInfoButton(await renderInfoButton())
    }, [user, isFollowing])

    const userProfilePic = user.userBasicData.profileImageSrc
    const userAvatar = (
        <Avatar
            alt={user.userBasicData.username}
            src={userProfilePic}
            sx={{ width: 164, height: 164 }}
        />
    )

    const isModal = useSelector((state) => state.modal.isModal)
    const title = useSelector((state) => state.modal.title)
    const dispatch = useDispatch()

    return (
        <Info>
            {userAvatar}
            <Username>{user.userBasicData.username}</Username>
            <Count>
                {user.posts.postsAmount} <span>posts</span>
            </Count>
            <Count>
                {followersCount}{' '}
                <span onClick={() => dispatch(modalOpen())}>followers</span>
            </Count>
            <Count>
                {user.additionalData.following}{' '}
                <span onClick={() => dispatch(modalOpen())}>following</span>
            </Count>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
                onExitComplete={() => null}
            >
                {isModal && <FollowerModal title={title} userId={user._id} />}
            </AnimatePresence>
            {infoButton}
        </Info>
    )
}
