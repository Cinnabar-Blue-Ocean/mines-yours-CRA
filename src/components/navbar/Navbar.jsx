import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";


import logo from '../../media/logo-no-background.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchBar from './searchbar.jsx';
import AddListingModal from '../Profile/AddListingModal.jsx'

const pages = ['Home', 'Profile', 'Listings', 'New Listing'];

const settings = ['Account', 'Logout', 'Login', 'Register'];
const settingsMap = ['/profile', '/signIn', '/signIn', '/signIn'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const urlMap = ['/', user ? '/ownProfile' : '/signIn', '/', '/'];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModalOpen = (page) => {
    if (page === 'New Listing') {
      handleOpen()
    }
  }

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await signOutUser()
      setLoading(true);
      console.log(user)
      navigate(`/loading`, { replace: true })
      await setTimeout(fun => {
        navigate(`/`, { replace: true })
      }, 600)
    } catch (error) {
      setError(error.message);
    }
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 4, height: '10em' }}
              style={{ padding: '20px 0px 20px 0px' }}
              component="img"
              src={logo}
              alt="mines yours logo"
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <SearchBar />
                {pages.map((page, idx) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={urlMap[idx]} key={page} style={{ textDecoration: 'none' }}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 7, height: '5em' }}
              component="img"
              src={logo}
              alt="mines yours logo"
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, idx) => (
                <Link to={urlMap[idx]} key={page} style={{ textDecoration: 'none' }}>
                  <Button
                    key={page}
                    onClick={() => { handleModalOpen(page) }}
                    sx={{ my: 2, color: '#398378', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <SearchBar />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{ color: 'green' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, idx) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={settingsMap[idx]} key={setting} style={{ textDecoration: 'none' }}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                {/* <Button textAlign="center" onClick={handleSignOut} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Logout</Typography>
                </Button> */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AddListingModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Navbar;