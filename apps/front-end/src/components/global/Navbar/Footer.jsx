import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { NavbarWrapper, NavbarLinks, NavbarButton } from './NavbarStyle'

const FooterWrapper = styled(NavbarWrapper)`
    border-top: 1px solid #dbdbdb;
    border-bottom: none;
    display: none;
    bottom: 0;

    @media (max-width: 850px) {
        display: flex;
    }
`
export default function Footer() {
    const user = useSelector((state) => state.user.user)

    const isLoading = useSelector((state) => state.user.loading)
    if (isLoading) return <div>loading</div>

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
        <FooterWrapper>
            <NavbarLinks>
                <NavbarButton>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </NavbarButton>
                <NavbarButton>
                    <i className="fa-solid fa-square-plus"></i>
                </NavbarButton>

                <NavbarButton>
                    <Link to="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </NavbarButton>
                <NavbarButton>
                    <Link to="">
                        <i className="fa-solid fa-heart"></i>
                    </Link>
                </NavbarButton>
                <Link to={`/${user.userBasicData.username}`}>
                    {headerAvatar}
                </Link>
            </NavbarLinks>
        </FooterWrapper>
    )
}
