import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Paper,Box,Button,TextField,Tab,Tabs,Stack,Typography} from '@mui/material';
import {TabPanel} from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import SignUpTab from '../components/sign/SignUpTab.jsx'
import SignInTab from '../components/sign/SignInTab.jsx'
import SpinBox from '../components/sign/spinBox.jsx'
import logo from '../media/logo-no-background.png';

function SignIn() {
  const {user} = useAuth();

  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    console.log(event.target)
    setValue(newValue);
  };

  return (
    <Stack>
    <Stack
    sx={{
      backgroundImage: `linear-gradient(-225deg, #20E2D7 20%, #F9FEA5 100%)`
    }}
    display='flex'
    alignItems="center"
    justifyContent="center"
    flexDirection='row'
    width='100vw'
    height='100vh'
    boxShadow= '0 0 50px #fff'
    >
      <SpinBox />
      <Stack
      flex='1'
    display='flex'
    alignItems="center"
    justifyContent="center"
    flexDirection='column'
    p='10px'
    pt='0'
    mr='50px'

    >
      <TabContext value={value}>
        {!user?<Box sx={{ borderBottom: 0, borderColor: 'green' ,width:{ lg: '300px', xs: '250px' },}}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered >
            <Tab label="SignIn" value="0" />
            <Tab label="SignUp" disabled={user?true:false} value="1" />
        </Tabs>
      </Box>:null}
        <TabPanel value="0">
          <SignInTab />
        </TabPanel>
        <TabPanel value="1">
          <SignUpTab setValue={setValue}/>
          </TabPanel>
        </TabContext>
      </Stack>
    </Stack>
    <Typography fontWeight={600} color="green" sx={{ opacity: '0.1', display: { lg: 'block' }, fontSize: {lg:'100px',md:'50px',xs:'30px'} ,position:'absolute',top:'75%',left:'55%'}}>
          Mines Yours
    </Typography>
    <Typography fontWeight={600} color="green" sx={{ opacity: '0.1', display: { lg: 'block' ,xs:'none'}, fontSize: {lg:'26px',md:'15px'} ,position:'absolute',top:'90%',left:'55%'}}>
          A Platform Allows Users to Swap Used items
    </Typography>
    </Stack>
  );
}

export default SignIn;