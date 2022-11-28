import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'

const props = [
  {
    rating: 4,
    name: 'Jimmy',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  },
  {
    rating: 4,
    name: 'Amy',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  },
  {
    rating: 4,
    name: 'Jason',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  },
  {
    rating: 4,
    name: 'Ronald',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  },
  {
    rating: 4,
    name: 'James',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  },
  {
    rating: 4,
    name: 'Ronny',
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    avatar: '',
    recommend: true
  }
]

const ReviewList = () => {
  return (
    <>
      {props.map((item, i) => {
        return (
          <Paper key={i} style={{width: 300, height: 200}}>
            <div className='reviewTopRow' style={{display: 'flex'}}>
              <Avatar sx={{ml: 2, mt: 1, width: 45, height: 45}}/>
              <Rating name="half-rating-read" defaultValue={Math.random() * (5 - 2) + 2} precision={0.5} readOnly sx={{ ml: 9, mt: 1.5 }} size='large'/>
            </div>
            <div style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10}}>
              {item.name}
            </div>
            <div style={{marginTop: 20, marginLeft: 10}}>
              {item.body}
            </div>
          </Paper>
        )
      })}

    </>
  );
};

export default ReviewList;

