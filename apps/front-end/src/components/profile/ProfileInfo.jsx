import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { Username, Info, Button, Count } from './ProfileStyle'
import { modalOpen } from '../../store/modal'
import FollowerModal from './FollowerModal'

export default function ProfileInfo() {
    const userProfilePic = user.userBasicData.profileImageSrc
    const userAvatar = (
        <Avatar
            alt={
                user.additionalData.name.firstName +
                ' ' +
                user.additionalData.name.lastName
            }
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
            {isModal && <FollowerModal title={title} />}
            {/* if not user, change to follow/unfollow button */}
            <Link to="/settings">
                <Button>Edit Profile</Button>
            </Link>
        </Info>
    )
}
