import React from 'react';
import { Stack,Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box width='100vw' height='100vh' sx={{
    backgroundImage: `linear-gradient(-225deg, #20E2D7 20%, #F9FEA5 100%)`
  }}>
  <Box margin='auto' position='absolute' top='50%' left='50%' sx={{transform:'translate(-50%,-50%)'}}>
    <InfinitySpin color="green"/>
  </Box>
  </Box>
);

export default Loader;