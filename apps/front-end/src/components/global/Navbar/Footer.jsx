import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { NavbarWrapper, Popup, NavbarLinks, NavbarButton } from './NavbarStyle'
import NewPostModal from '../NewPostModal'
import { useIsSmall } from '../../../services/useMediaQuery'

const FooterWrapper = styled(NavbarWrapper)`
    border-top: 1px solid #dbdbdb;
    border-bottom: none;
    display: none;

    @media (max-width: 850px) {
        display: flex;
    }
`
export default function Header() {
    const isLoading = useSelector((state) => state.user.loading)
    const [isNewPostModal, setIsNewPostModal] = useState(false)

    const user = useSelector((state) => state.user.user)

    const headerAvatar = (
        <Avatar
            alt={
                user.additionalData.name.firstName +
                ' ' +
                user.additionalData.name.lastName
            }
            src={user.userBasicData.profileImageSrc}
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
        />
    )

    const isSmall = useIsSmall()

    return (
        <AnimatePresence
            initial={false}
            exitBeforeEnter
            onExitComplete={() => null}
        >
            <FooterWrapper
                layout
                variants={isSmall ? { Popup } : null}
                initial="hidden"
                animate="visible"
                exit="exit"
                onChange={isSmall}
            >
                <NavbarLinks>
                    <NavbarButton>
                        <Link to="/">
                            <i className="fas fa-home" />
                        </Link>
                    </NavbarButton>
                    <NavbarButton onClick={() => setIsNewPostModal(true)}>
                        <i className="far fa-plus-square" />
                    </NavbarButton>

                    {isNewPostModal && (
                        <NewPostModal setIsNewPostModal={setIsNewPostModal} />
                    )}

                    <NavbarButton>
                        <Link to="">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </NavbarButton>
                    <NavbarButton>
                        <Link to="">
                            <i className="far fa-heart" />
                        </Link>
                    </NavbarButton>
                    <Link to={`/${user.userBasicData.username}`}>
                        {headerAvatar}
                    </Link>
                </NavbarLinks>
            </FooterWrapper>
        </AnimatePresence>
    )
}
