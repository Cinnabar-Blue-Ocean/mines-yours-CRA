import React, {useState, useEffect} from 'react';
// import LandingPage from './Landing Page/LandingPage'
// import Navbar from './navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home.jsx'
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import Profile from '../pages/Profile.jsx'
import CollectUserInfo from '../pages/CollectUserInfo.jsx'
import {
  getUser,
  getListing,
  getMessages,
  getReviews,
  getTrades } from '../firebase/retrieveData';
import Loader from '../pages/Loading.jsx'


const App = () => {

  const [user, setUser] = useState([]);
  const [listing, setListing] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [trades, setTrades] = useState([]);

  // useEffect(() => {
  //   getUser({username: "test"})
  //     .then(data => {
  //       setUser(data);
  //     })
  // }, []);

  // useEffect(() => {
  //   getListing({name: "Lawn Mower"})
  //     .then(data => {
  //       setListing(data);
  //     })
  // }, []);

  // useEffect(() => {
  //   getMessages({from_user: "test_from_user"})
  //     .then(data => {
  //       setMessages(data);
  //     })
  // }, [])

  // useEffect(() => {
  //   getReviews({})
  //     .then(data => {
  //       setReviews(data);
  //     })
  // }, [])

  // useEffect(() => {
  //   getTrades({})
  //     .then(data => {
  //       setTrades(data);
  //     })
  // }, [])

  useEffect(() => {
    console.log('user', user, 'listing', listing, 'messages', messages, 'reviews', reviews, 'trades', trades);
  }, [user, listing, messages]);


  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userInfo" element={<CollectUserInfo />} />
        <Route path="/loading" element={<Loader />} />
      </Routes>
    </Box>
  );
};

export default App;



