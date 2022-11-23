import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TradeCard from '../Landing Page/Trades/TradeCard'

const listings = [{
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
}]

// client/src/components/Landing Page/Trades/TradeCard.jsx

const UserActiveTrades = () => {
  return (
    <div style={{ width: 1000, marginTop: 10 }}>
       <div style={{display: 'flex'}}>
        <div style={{fontWeight: 'bold', fontSize: 30, marginLeft: 20, marginRight: 15}}>
          Trades
        </div>
      <Button variant="outlined" style={{backgoundColor: 'black', marginRight: 6}}>
        Active Trades
      </Button>
      <Button variant="outlined" style={{backgoundColor: 'black'}}>
        Trade History
      </Button>
      </div>
      <Paper elevation={12} sx={{ height: 420, mt: 1, borde: '1px solid black', borderRadius: 2, maxHeight: '80vh', overflowY: 'auto', backgrundColor: '#1976d2' }}>
        <div className='toprow' style={{display: 'flex'}}>
        <div style={{marginLeft: 30, marginTop: 10}}>
      <div style={{
        marginTop: 6,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 25,
      }}>
        <TradeCard listings={listings}/>
      </div>
    </div>
        </div>
      </Paper>
    </div>
  );
};

export default UserActiveTrades;