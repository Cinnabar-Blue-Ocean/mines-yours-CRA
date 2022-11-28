import "../components/messages/style.scss"
import React from 'react';
import LandingPage from '../components/Landing Page/LandingPage'
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/Profile/AnimatedPage'
import MessagesModal from './MessagesModal'
import {auth} from '../firebase/index.js'



const Home = () => {
  return (
    <Box>
      <AnimatedPage>
      <Navbar />
      <LandingPage />
      <MessagesModal />
      </AnimatedPage>
    </Box>
  );
};

export default Home;
