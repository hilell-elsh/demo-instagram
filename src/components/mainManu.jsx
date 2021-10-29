import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import {newMessagesCount, newNotificationsCount } from './header'

  
  const isMenuOpen = Boolean(anchorEl);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const openMessages = () => {
    // open messages
  }
  const openNotifications = () => {
    // open notifications
  }
  const onProfileChoose = () => {
    handleMenuClose;
    // need to add profile route
  }
  const onAccountChoose = () => {
    handleMenuClose;
    // need to add account route
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      <MenuItem onClick={onProfileChoose}>Profile</MenuItem>
      <MenuItem onClick={onAccountChoose}>My account</MenuItem>
    </Menu>
  );