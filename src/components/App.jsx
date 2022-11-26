import React, { useState, useEffect } from 'react';
// import LandingPage from './Landing Page/LandingPage'
// import Navbar from './navbar/Navbar.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home.jsx'
import SignIn from '../pages/SignIn.jsx'
import Profile from '../pages/Profile.jsx'
import CollectUserInfo from '../pages/CollectUserInfo.jsx'

import {
  getUsers,
  getListings,
  getMessages,
  getReviews,
  getTrades,
  getListingsByType
} from '../firebase/firestoreMethods';

import Loader from '../pages/Loading.jsx'
import { AnimatePresence } from "framer-motion";

import { useAuth } from '../firebase/authMethods.js';
import { seedUsers, seedListings } from '../seedData/seedingFunctions';



const App = () => {
  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [trades, setTrades] = useState([]);

  const {signIn, user} = useAuth();

  // useEffect(() => {
  //   signIn('bobby@gmail.com', 'password123')
  // }, []);

  // useEffect(() => {
  //   seedListings();
  // }, []);

  return (
    <Box>
      <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/userInfo" element={<CollectUserInfo />} />
        <Route path="/loading" element={<Loader />} />
      </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default App;



