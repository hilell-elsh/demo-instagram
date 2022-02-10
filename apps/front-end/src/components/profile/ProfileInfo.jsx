import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { AnimatePresence } from 'framer-motion'
import { CircularProgress } from '@mui/material'

import { Username, Info, Button, Count } from './ProfileStyle'
import { modalOpen } from '../../store/modal'
import FollowerModal from './FollowerModal'

export default function ProfileInfo({ user }) {
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
                {user.additionalData.followers}{' '}
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
            {/* if not user, change to follow/unfollow button */}
            <Link to="/settings">
                <Button>Edit Profile</Button>
            </Link>
        </Info>
    )
}
