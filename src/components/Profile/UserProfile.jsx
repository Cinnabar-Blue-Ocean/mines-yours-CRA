import React, {useEffect, useState, useContext} from 'react';
import ProfileBox from './ProfileBox'
import Reviews from './Reviews'
import UserActiveTrades from './UserActiveTrades'
import LifetimeTrades from './LifetimeTrades'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { DataContext } from '../../firebase/dataStore.jsx';
import { useAuth } from '../../firebase/authMethods.js';




const UserProfile = () => {
  const dataContext = useContext(DataContext);
  const [userListing, setUserListings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    console.log('user', user)
    const loadData = async () => {
      const contextListings = await dataContext.loadListings();
      let filtered = contextListings.filter((item) => {
        console.log(item.owner_id)
        return item.owner_id === 'w95feptK9GflCePAxXIrtDsubRV2'
      })
      console.log(filtered)
      setUserListings(filtered);
    }
    loadData();
  }, []);
   // let filtered = userListing.filter((item) => {
  //   return item.owner_id === 'pP8oG6buCTrqnOnZQ4xp'
  // })
  // setFilterList(filtered)

  return (
    <div className='profile-container' style={{ display: 'flex', backgrounColor: '#f3e9d2' }}>
      <div className='leftside-container' style={{ display: 'flex', flexDirection: 'column' }}>
        <ProfileBox />
        <LifetimeTrades />
      </div>
      <div className='rightside-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
        <UserActiveTrades userListing={userListing}/>
        <Reviews />
      </div>
    </div>
  );
};

// <Grid container columns={2}>
{/* <Grid container spacing={2}>
<ProfileBox/>
</Grid>
<Grid container>
<UserActiveTrades/>
</Grid>
</Grid> */}

export default UserProfile;