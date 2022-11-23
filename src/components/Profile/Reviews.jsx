import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import ReviewList from './ReviewList'

const samplePhoto = 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'


const Reviews = () => {
  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: 30, margin: 10 }}>
        Reviews
      </div>
      <Paper elevation={12} sx={{ height: 325, mt: 1, borde: '1px solid black', borderRadius: 2, maxHeight: '80vh', overflowY: 'auto' }}>
        <div style={{
        marginTop: 6,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 25,
      }}>
        <ReviewList/>
        </div>
      </Paper>
    </div>
  );
};

export default Reviews;