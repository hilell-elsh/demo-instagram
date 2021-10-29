import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { userAvatar, newMessagesCount, newNotificationsCount } from './header'

  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const onProfileChoose = () => {
    handleMenuClose;
    // need to add profile route
  }
  const onAccountChoose = () => {
    handleMenuClose;
    // need to add account route
  }
  const openMessages = () => {
    // open messages
  }
  const openNotifications = () => {
    // open notifications
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={openMessages}>
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
      <MenuItem onClick={openNotifications}>
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {userAvatar}
        </IconButton>
        <p>{user.profile.name.firstName+" "+user.profile.name.lastName}</p>
      </MenuItem>
    </Menu>
  );
