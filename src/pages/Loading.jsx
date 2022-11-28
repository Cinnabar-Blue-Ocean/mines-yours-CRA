import React from 'react';
import { Typography,Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box width='100vw' height='100vh' sx={{
    backgroundImage: `linear-gradient(-225deg, #20E2D7 20%, #F9FEA5 100%)`,
    // backgroundColor: `#85FFBD`,
    // backgroundImage: `linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)`,

    // backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  }}>
  <Typography id='load' fontWeight={700} color="green"  sx={{ opacity: '0.5', display: { lg: 'block' }, fontSize: {lg:'120px',md:'80px',xs:'50px'} ,position:'relative'}}>
          Mines Yours
  </Typography>
  <Box margin='auto' position='absolute' top='65%' left='50%' sx={{transform:'translate(-45%,-50%)'}}>
    <InfinitySpin color="green"/>
  </Box>
  </Box>
);

export default Loader;