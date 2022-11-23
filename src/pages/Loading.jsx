import React from 'react';
import { Stack,Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box margin='auto' position='absolute' top='50%' left='50%' transform='translate(-50px,-50px)'>
    <InfinitySpin color="green"/>
  </Box>
);

export default Loader;