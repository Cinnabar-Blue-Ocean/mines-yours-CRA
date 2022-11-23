import React from 'react';
import LandingPage from '../components/Landing Page/LandingPage'
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Box>
      <Navbar />
      <LandingPage />
      <Link to='/signIn'>signIn</Link>
      <Link to={`/profile/${3142}`}>profile</Link>
      <Link to={`/signUp`}>signUp</Link>
      <Link to={`/`}>home</Link>
    </Box>
  );
};

export default Home;