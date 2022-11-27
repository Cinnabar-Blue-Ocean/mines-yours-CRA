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

  // useEffect(() => {
  //   signIn('bobby@gmail.com', 'password123')
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      const contextListings = await dataContext.loadListings();
      setListings(contextListings.slice(0, 12));
    }
    loadData();
  }, []);

  // useEffect(() => {
  //   getListings()
  //   .then((data) => {
  //     setListings(data);
  //   })
  //   // findDistance(61080, 61073)
  // }, [])

  return listings.length > 0 ? (
    <>
      <div id="landing-page">
        <Sidebar setListings={setListings} />
        <div id="trade-container">
          <Trades listings={listings} />
        </div>
        {listings.length > 9 ? (<Pagination count={10} />) : (null)}
      </div>
      <button onClick={() => {
        orderListings('status')
          .then(data => {
            let moreResults = listings.slice();
            let finalResults = moreResults.concat(data);
            console.log('final results', finalResults, 'data', data)
            setListings(finalResults);
          })
      }}>LOAD MORE</button>
    </>
  ) : null
};

export default LandingPage;