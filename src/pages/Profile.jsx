import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import UserProfile from '../components/Profile/UserProfile'
// import { Link } from 'react-router-dom';


const Profile = () => {
  return (
    <Box>
      <Navbar />
     <UserProfile/>
    </Box>
  );
};

export default Profile;