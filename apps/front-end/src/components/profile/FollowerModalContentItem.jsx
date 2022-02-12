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
            <Link to={`/${user.userBasicData.username}`} onClick={() => dispatch(modalClose())}>
                {user.userBasicData.username}
            </Link>
            <p>
                {user.additionalData.name.firstName +
                    ' ' +
                    user.additionalData.name.lastName}
            </p>
            <RemoveButton
                className="fas fa-trash"
                onClick={() => setIsButton(true)}
            ></RemoveButton>
            {isButton && (
                <ExitButton
                    className="fas fa-times"
                    onClick={() => setIsButton(false)}
                    style={{ opacity: 0.6 }}
                ></ExitButton>
            )}
        </ModalContentItem>
    )
}
