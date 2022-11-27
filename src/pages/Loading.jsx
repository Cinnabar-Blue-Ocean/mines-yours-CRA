import React from 'react';
import { Stack,Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box margin='auto' position='absolute' top='50%' left='50%' sx={{transform:'translate(-50%,-50%)'}}>
    <InfinitySpin color="green"/>
  </Box>
);

export default Loader;