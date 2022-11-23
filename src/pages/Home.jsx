import React from 'react';
import LandingPage from '../components/Landing Page/LandingPage'
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/Profile/AnimatedPage'



const Home = () => {
  return (
    <Box>
      <AnimatedPage>
      <Navbar />
      <LandingPage />
      <Link to='/signIn'>signIn</Link>
      <Link to={`/profile/${3142}`}>profile</Link>
      <Link to={`/`}>home</Link>
      <Link to={`/userInfo`}>userInfo</Link>
      </AnimatedPage>
    </Box>
  );
};

export default Home;