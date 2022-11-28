import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import OwnProfile from '../components/Profile/OwnProfile'
import AnimatedPage from '../components/Profile/AnimatedPage'
// import { Link } from 'react-router-dom';


const OwnProfilePage = () => {
  return (
    <Box>
        <Navbar />
      <AnimatedPage>
        <OwnProfile />
      </AnimatedPage>
    </Box>
  );
};

export default OwnProfilePage;