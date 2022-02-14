import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import {
    ModalBackdrop,
    ModalWrapper,
    ModalHeader,
    ExitButton,
    ModalContent,
    dropIn,
    fadeIn,
} from '../global/ModalStyle'
import { modalClose } from '../../store/modal'
import FollowerModalContentItem from './FollowerModalContentItem'
import { getUserFollowers, getUserFollowing } from '../../services/user-data'

export default function FollowerModal({ title, userId }) {
    const dispatch = useDispatch()

    const [userFollowers, setUserFollowers] = useState([])
    const [userFollowing, setUserFollowing] = useState([])

    useEffect(() => {
        getUserFollowers(userId).then((res) => setUserFollowers(res))
        getUserFollowing(userId).then((res) => setUserFollowing(res))
    }, [])

    function checkContent(title) {
        if (title === 'following') {
            return userFollowing
        } else if (title === 'followers') {
            return userFollowers
        }
    }
    const usersList = checkContent(title)

    return (
        <ModalBackdrop
            onClick={() => dispatch(modalClose())}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ModalWrapper
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ModalHeader>
                    <p>{title}</p>
                    <ExitButton
                        className="fas fa-times"
                        onClick={() => dispatch(modalClose())}
                    ></ExitButton>
                </ModalHeader>
                <ModalContent>
                    {usersList.map((user) => {
                        return <FollowerModalContentItem user={user} />
                    })}
                </ModalContent>
            </ModalWrapper>
        </ModalBackdrop>
    )
}
