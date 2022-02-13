import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import {
    ModalContentItem,
    RemoveButton,
    ExitButton,
} from '../global/ModalStyle'
import { modalClose } from '../../store/modal'

export default function FollowerModalContentItem({ user }) {
    const [isButton, setIsButton] = useState(false)
    const dispatch = useDispatch()

    return (
        <ModalContentItem key={user._id}>
            <Avatar
                src={user.userBasicData.profileImageSrc}
                sx={{ width: 40, height: 40 }}
            />
            <Link
                to={`/${user.userBasicData.username}`}
                onClick={() => dispatch(modalClose())}
            >
                {user.userBasicData.username}
            </Link>
            <p>
                {user.additionalData.name.firstName +
                    ' ' +
                    user.additionalData.name.lastName}
            </p>
            <RemoveButton
                layout
                className="fa-solid fa-trash"
                onClick={() => setIsButton(true)}
                initial={{ x: 0 }}
                animate={{
                    transition: {
                        duration: 0.4,
                        type: 'spring',
                        damping: 10,
                        stiffness: 500,
                    },
                }}
                exit={{ x: 0 }}
            ></RemoveButton>
            {isButton && (
                <ExitButton
                    className="fa-solid fa-xmark"
                    onClick={() => setIsButton(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                ></ExitButton>
            )}
        </ModalContentItem>
    )
}
