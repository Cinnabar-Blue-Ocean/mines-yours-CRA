import React from 'react';
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



const UserProfile = () => {
  return (
    <div className='profile-container' style={{ display: 'flex', backgrounColor: '#f3e9d2' }}>
      <div className='leftside-container' style={{ display: 'flex', flexDirection: 'column' }}>
        <ProfileBox />
        <LifetimeTrades />
      </div>
      <div className='rightside-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
        <UserActiveTrades />
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