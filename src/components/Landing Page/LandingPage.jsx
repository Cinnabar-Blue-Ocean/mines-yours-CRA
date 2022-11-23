import React, { useState, useEffect } from 'react';
import Trades from './Trades/Trades'
import Sidebar from './Sidebar'
import Pagination from '@mui/material/Pagination';
import { getFirestore } from 'firebase/firestore';
import { getListings } from '../../firebase/getListings.js'
import { findDistance } from '../../zipCodes/locationFinder.js'

const LandingPage = () => {
  const [listings, setListings] = useState([{
    description: 'testteststest. Thjis is a test blag blahj',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  },{
    description: 'testteststest',
    name: 'testteststest',
    photos: ['https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
    type: 'testteststest',
    status: 'testteststest',
    user_id: 'nickamenda',
    zip_code: 61080
  }])
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
        <Sidebar setListings={setListings}/>
        <div id="trade-container">
          <Trades listings={listings}/>
        </div>
        {listings.length > 9 ? (<Pagination count={10} />) : (null)}
      </div>
    </>
  ) : null
};

export default LandingPage;
