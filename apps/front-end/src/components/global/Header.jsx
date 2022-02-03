import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { HeaderWrapper, HeaderLogo, HeaderSearch, HeaderNav, HeaderButton } from './HeaderStyle'
import NewPostModal from './NewPostModal'
import { useSelector } from 'react-redux'

export default function Header() {
  const user = useSelector((state => state.user.user))
  const [isNewPostModal, setIsNewPostModal] = useState(false) 

  const headerAvatar = <Avatar 
    alt={user.additionalData.name.firstName + " " + user.additionalData.name.lastName}
    src={user.userBasicData.profileImageSrc}
    sx={{ width: 36, height: 36, cursor: "pointer"}}
  />

  return (
      <HeaderWrapper>
        <HeaderLogo>
          <Link to="/">Kilogram</Link>
        </HeaderLogo>
        <HeaderSearch type="text" placeholder="Search"/>
        <HeaderNav>
          <HeaderButton>
            <Link to="/">
              <i className="fas fa-home" />
            </Link>
          </HeaderButton>
          <HeaderButton>
            <Link to="">
              <i className="fab fa-facebook-messenger" />
            </Link>
          </HeaderButton>
          <HeaderButton onClick={() => setIsNewPostModal(true)}>
              <i className="far fa-plus-square" />
          </HeaderButton>
          { isNewPostModal && <NewPostModal setIsNewPostModal={setIsNewPostModal}/> }
          <HeaderButton>
            <Link to="">
              <i className="far fa-compass" />
            </Link>
          </HeaderButton>
          <HeaderButton>
            <Link to="">
              <i className="far fa-heart" />
            </Link>
          </HeaderButton>
          <Link to="profile">
            {headerAvatar}
          </Link>
          <HeaderButton >
            <i className="fas fa-sign-out-alt"></i>
          </HeaderButton>
        </HeaderNav>
      </HeaderWrapper>
  )  
}