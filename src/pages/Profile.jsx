import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import UserProfile from '../components/Profile/UserProfile'
import AnimatedPage from '../components/Profile/AnimatedPage'
// import { Link } from 'react-router-dom';


const Profile = () => {
  return (
    <Box>
        {/* <Navbar /> */}
      <AnimatedPage>
        <UserProfile />
      </AnimatedPage>
    </Box>
  );
};

export default Profile;