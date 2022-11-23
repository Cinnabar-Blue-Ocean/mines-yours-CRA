import React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import TradeCard from '../Landing Page/Trades/TradeCard'
import SponsoredTrades from './SponsoredTrades'
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';



// import 'react-circular-progressbar/dist/styles.css';



const LifetimeTrades = () => {

  return (
    <Box>
      <div className='headerRow' style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 20 }}>
          Sponsored Posts
        </div>
        <Button variant="outlined" endIcon={<LockIcon />} style={{marginLeft: 10}}>
          Pro
        </Button>
      </div>
      <Paper elevation={24} sx={{ height: 465, ml: 2, mt: 1, borde: '1px solid black', borderRadius: 2, maxHeight: '80vh', overflowY: 'auto', }}>
        <SponsoredTrades />
      </Paper>
    </Box>
  );
};

/*
<Box>
        <div style={{fontWeight: 'bold', fontSize: 30, marginLeft: 20}}>
          Lifetime Trades
        </div>
      <Paper elevation={24} sx={{ height: 465, ml: 2, mt: 1, borde: '1px solid black', borderRadius: 2 }}>
        <Stack>
          <div style={{height: 100, width: 100}}>

      <CircularProgressbar
  value={firstRender ? 0 : 75}
  text={`75%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 1,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, 234)`,
    textColor: 'black',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
          </div>
        </Stack>

      </Paper>
    </Box>
*/

export default LifetimeTrades;