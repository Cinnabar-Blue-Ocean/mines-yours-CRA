import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';



const samplePhoto = 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'

//test
const ProfileBox = ({userName}) => {
  return (
    <div style={{ width: 400, marginTop: 8 }}>
      <Grid>
        <Paper elevation={12} sx={{ height: 320, m: 1, borde: '1px solid black', borderRadius: 2 }}>
          <Grid container >
            <Stack direction='row'>
              <Avatar alt="Remy Sharp" src={samplePhoto} sx={{ width: 150, height: 150, m: 2, borderColor: 'black' }}
                style={{
                  border: '1px solid black'
                }} />
              <div>
                <div style={{ marginLeft: 20, marginBottom: 10, marginTop: 20, fontSize: 26, fontWeight: 'bold' }}>{userName.displayName}</div>
                <div style={{ marginLeft: 20 }}>Joined Jan. 2019</div>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{ ml: 2, mt: 1.5 }} />
              </div>
              <div style={{ marginTop: 3, marginRight: 10 }}>
                <Fab size='small' aria-label="edit">
                  <EditIcon />
                </Fab>
              </div>
            </Stack>
            <Grid>
              <div style={{ height: 140, width: 470, borer: '1px solid black', marginLeft: 10, overflow: 'hidden' }}>
                <div style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 1, marginBottom: 6 }}>Bio</div>
                <div style={{ width: 350 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default ProfileBox;