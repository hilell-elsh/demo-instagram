import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import {
    HeaderWrapper,
    HeaderLogo,
    HeaderSearch,
    HeaderNav,
    HeaderButton,
} from './HeaderStyle'
import NewPostModal from './NewPostModal'
import { clear } from '../../store/user'
import { logout } from '../../services/auth-service'

export default function Header() {
  const isLoading = useSelector((state => state.user.loading))
  const [isNewPostModal, setIsNewPostModal] = useState(false) 
  
  const user = useSelector((state => state.user.user))
  
  const headerAvatar = <Avatar 
  alt={user.additionalData.name.firstName + " " + user.additionalData.name.lastName}
  src={user.userBasicData.profileImageSrc}
  sx={{ width: 36, height: 36, cursor: "pointer"}}
  />
 
  return (
      <Header>
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
          {/* <Link to={`/${user.userBasicData.username}`}> */}
          <Link to={`/${user.userBasicData.username}`}>
            {headerAvatar}
          </Link>
          <HeaderButton >
            <i className="fas fa-sign-out-alt"></i>
          </HeaderButton>
        </HeaderNav>
      </Header>
  )  
}
