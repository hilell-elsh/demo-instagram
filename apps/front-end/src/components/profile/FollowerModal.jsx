import { useDispatch } from 'react-redux'
import { useState, useRef, useCallback } from 'react'
import Skeleton from '@mui/material/Skeleton'

import {
    ModalBackdrop,
    ModalWrapper,
    ModalHeader,
    ExitButton,
    ModalContent,
} from '../global/ModalStyle'
import { modalClose } from '../../store/modal'
import { getUser } from '../../services/user-data'
import FollowerModalContentItem from './FollowerModalContentItem'
import useInfiniteScrolling from '../../services/useInfiniteScrolling'

export default function FollowerModal({ title }) {
    const dispatch = useDispatch()

    const userFollowers = getUser().profile.followers
    const userFollowing = getUser().profile.following

    function checkContent(title) {
        if (title === 'following') {
            return userFollowing
        } else if (title === 'followers') {
            return userFollowers
        }
    }
    const usersList = checkContent(title)

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, error, items, hasMore } = useInfiniteScrolling(
        usersList,
        pageNumber
    )

    const observer = useRef()
    const lastItemElementRef = useCallback(
        (node) => {
            if (loading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1)
                }
            })
            if (node) observer.current.observe(node)
        },
        [loading, hasMore]
    )

    return (
        <ModalBackdrop>
            <ModalWrapper>
                <ModalHeader>
                    <p>{title}</p>
                    <ExitButton
                        className="fas fa-times"
                        onClick={() => dispatch(modalClose())}
                    ></ExitButton>
                </ModalHeader>
                <ModalContent>
                    {items.map((username, key, index) => {
                        if (items.length === index + 1) {
                            return (
                                <FollowerModalContentItem
                                    ref={lastItemElementRef}
                                    key={Math.random()}
                                    username={username}
                                    index={index}
                                    loading={loading}
                                />
                            )
                        } else {
                            return (
                                <FollowerModalContentItem
                                    key={Math.random()}
                                    username={username}
                                    index={index}
                                    loading={loading}
                                />
                            )
                        }
                    })}
                    {loading && <Skeleton animation="wave" />}
                    {/* {error &&<ErrorMsg></ErrorMsg>} */}
                </ModalContent>
            </ModalWrapper>
        </ModalBackdrop>
    )
}
