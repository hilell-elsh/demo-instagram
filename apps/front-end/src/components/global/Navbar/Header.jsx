import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import {
    NavbarWrapper,
    NavbarLogo,
    HeaderSearch,
    NavbarLinks,
    NavbarButton,
} from './NavbarStyle'
import NewPostModal from '../NewPostModal'

const HeaderWrapper = styled(NavbarWrapper)`
    @media (max-width: 850px) {
        justify-content: center;
    }
`
const HeaderLinks = styled(NavbarLinks)`
    @media (max-width: 850px) {
        display: none;
        /* flex: none; */
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

    return (
        <HeaderWrapper>
            <NavbarLogo layout>
                <Link to="/">Kilogram</Link>
            </NavbarLogo>
            <HeaderSearch type="text" placeholder="Search" />
            <HeaderLinks>
                <NavbarButton>
                    <Link to="/">
                        <i className="fas fa-home" />
                    </Link>
                </NavbarButton>
                <NavbarButton onClick={() => setIsNewPostModal(true)}>
                    <i className="far fa-plus-square" />
                </NavbarButton>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter
                    onExitComplete={() => null}
                >
                    {isNewPostModal && (
                        <NewPostModal setIsNewPostModal={setIsNewPostModal} />
                    )}
                </AnimatePresence>
                <NavbarButton>
                    <Link to="">
                        <i className="far fa-heart" />
                    </Link>
                </NavbarButton>
                <Link to={`/${user.userBasicData.username}`}>
                    {headerAvatar}
                </Link>
                <NavbarButton>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </NavbarButton>
            </HeaderLinks>
        </HeaderWrapper>
    )
}
