import * as React from 'react';
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';


import {user} from '../../ex-apis/user'
import {notifications} from '../../ex-apis/notifications'
import {messages} from '../../ex-apis/messages'

export const newMessagesCount = messages.filter((noti) => noti.readed === "false").length;
export const newNotificationsCount = notifications.filter((noti) => noti.readed === "false").length;
export const userAvatar = <Avatar alt={user.profile.name.firstName+" "+user.profile.name.lastName} src={user.profile.image.src} />

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 16,
  backgroundColor: alpha("#fff", 0.15),
  '&:hover': {
    backgroundColor: alpha("#fff", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const openMessages = () => {
    // open messages
  }
  const openNotifications = () => {
    // open notifications
  }
  const onProfileChoose = () => {
    handleMenuClose();
    // need to add profile route
  }
  const onAccountChoose = () => {
    handleMenuClose();
    // need to add account route
  }
  const logout = () => {
    handleMenuClose();
  }
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem onClick={onProfileChoose}>
            <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            component={Link}
            to="/profile"
            >
                {userAvatar}
                Profile
            </IconButton>
        </MenuItem>
        <MenuItem onClick={onAccountChoose}>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            component={Link}
            to="/settings"
          >
            <Badge>
              <SettingsIcon />
            </Badge>
            <p> My account</p>
          </IconButton>
        </MenuItem>
        <MenuItem 
          onClick={openMessages} 
          sx={{display: {xs: 'flex', md: 'none'}}}
          component={Link}
          to="/mailbox"
          >
            <IconButton 
            size="large" 
            aria-label="show new messages" 
            color="inherit">
            <Badge badgeContent={newMessagesCount} color="error">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={openNotifications} sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
            >
            <Badge badgeContent={newNotificationsCount} color="error">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={logout} sx={{borderTop: 1}}>
            <p>Logout</p>
        </MenuItem>
        </Menu>
    );
   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Demo-Instagram
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              size="large" 
              aria-label="show new mails" 
              color="inherit" 
              onClick={openMessages}
              component={Link}
              to="/mailbox"
            >
              <Badge badgeContent={newMessagesCount} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              onClick={openNotifications}
            >
              <Badge badgeContent={newNotificationsCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {userAvatar}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}