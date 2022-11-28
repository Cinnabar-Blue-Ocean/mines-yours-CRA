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




const OwnProfile = () => {
  const dataContext = useContext(DataContext);
  const [userListing, setUserListings] = useState([]);
  const { user } = useAuth();
  const listings = [{
    description: 'a nice old guitar, looking for some volleyball gear in return',
    name: 'Guitar',
    photos: ['https://mattsmusic.com/wp-content/uploads/2021/09/MG_3487.jpg'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'an old desk, looking for a chair in return',
    name: 'Desk',
    photos: ['https://ofova.com/wp-content/uploads/2021/09/PAOLI-Bowfront-Desk-cherry-091521.jpg'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: '2008 Ford F150, looking for an old mustang or a newer mazda',
    name: 'Ford F150',
    photos: ['https://carfax-img.vast.com/carfax/v2/3752342368382433449/1/344x258'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'decent trampoline in good shape',
    name: 'Trampoline',
    photos: ['https://dtpmhvbsmffsz.cloudfront.net/posts/2017/11/08/5a03a451f0137d013e008f1c/m_5a03a4c22fd0b7fc8500974a.jpg'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'old golfbag, looking to trade for some more golfballs',
    name: 'golfbag',
    photos: ['https://playitagainsports.imgix.net/images/11752-S000029919-1?auto=compress,format&fit=clip&w=800&orient=6'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'really solid 14 foot trailer',
    name: '14 Foot Trailer',
    photos: ['https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/15922431-0-102827511.jpg'],
    type: 'trade',
    status: 'active',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'an old basketball goal i wanna get rid of',
    name: 'Basketball Goal',
    photos: ['https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/64755877/29db49d661f64ddd3960297c68cd4ae8.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9340de6e3d936137dfc48d49d2232672'],
    type: 'trade',
    status: 'unavailable',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'weight set for a squat rack, pick up only',
    name: 'Weight Set',
    photos: ['https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/64755877/29db49d661f64ddd3960297c68cd4ae8.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9340de6e3d936137dfc48d49d2232672'],
    type: 'trade',
    status: 'unavailable',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'almost brand new jordan 9s',
    name: 'Jordan 9 SZ 11',
    photos: ['https://thumbor.offerup.com/OBqZ_6pHdnH96u3kkCpAE_o7R7Y=/1442x1922/964a/964a90f5c46f49ee992e4536bba00312.jpg'],
    type: 'trade',
    status: 'unavailable',
    owner_id: 'nickamenda',
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'decent shape xbox one s',
    name: 'Xbox One S',
    photos: ['https://thumbor.offerup.com/_o7XanFeilRcd3xvqGXtL7MC7cA=/1920x1920/8191/81916640341244a78fdebdc9547cd8bc.jpg'],
    type: 'trade',
    status: 'unavailable',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: '3 stock dodge rims, 17.5X3',
    name: 'Stock dodge wheels',
    photos: ['https://thumbor.offerup.com/t6lQTYBbzjqtfv3KfGFi-6NUUGo=/1440x1920/1989/1989596fd2ce4cddb8aff95fb0a218bb.jpg'],
    type: 'trade',
    status: 'unavailable',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }, {
    description: 'brand new never used sony lens',
    name: 'Sony 55mm 1.8 Lens',
    photos: ['https://thumbor.offerup.com/QchuQyXY-56sZaZJ6wgiCZWjyVY=/1440x1920/562e/562ee81fdfc0439eafa46f662b71c61a.jpg'],
    type: 'trade',
    status: 'unavailable',
    owner_id: `${user.displayName}`,
    zip_code: 61080,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  }
]

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
        <ProfileBox userName={user}/>
        <LifetimeTrades />
      </div>
      <div className='rightside-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
        <UserActiveTrades userListing={listings} userName={user}/>
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

export default OwnProfile;