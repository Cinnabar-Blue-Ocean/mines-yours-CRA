import React from 'react';
import { Stack,Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box margin='auto' position='absolute' top='45%' left='45%'>
    <InfinitySpin color="green"/>
  </Box>
);

export default Loader;