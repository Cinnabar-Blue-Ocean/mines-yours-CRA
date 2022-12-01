import React, { useState, useEffect, useContext } from 'react';
import Trades from './Trades/Trades'
import Sidebar from './Sidebar'
import Pagination from '@mui/material/Pagination';
import { getFirestore } from 'firebase/firestore';
import { findDistance } from '../../zipCodes/locationFinder.js'

import {
  getUsers,
  getListings,
  getMessages,
  getReviews,
  getTrades,
  orderListings
} from '../../firebase/firestoreMethods';

import { useAuth } from '../../firebase/authMethods.js';
import { DataContext } from '../../firebase/dataStore.jsx';

const LandingPage = () => {
  const dataContext = useContext(DataContext);
  const [listings, setListings] = useState([])
  const { signIn, user } = useAuth();

  // // useEffect(() => {
  // //   signIn('bobby@gmail.com', 'password123')
  // // }, []);

  useEffect(() => {
    const loadData = async () => {
      const contextListings = await dataContext.loadListings();
      setListings(contextListings);
    }
    loadData();
  }, []);

  return listings.length > 0 ? (
    <>
      <div id="landing-page">
        <Sidebar setListings={setListings} />
        <div id="trade-container">
          <Trades listings={listings} />
        </div>
        <button onClick={() => {
          orderListings('status')
            .then(data => {
              let moreResults = listings.slice();
              let finalResults = moreResults.concat(data);
              console.log('final results', finalResults, 'data', data)
              setListings(finalResults);
            })
        }} className="loadmore">More listings...</button>
      </div>
    </>
  ) : null
};

export default LandingPage;