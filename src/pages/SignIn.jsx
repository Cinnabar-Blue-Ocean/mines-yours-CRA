import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Paper,Box,Button,TextField,Tab,Tabs,Stack} from '@mui/material';
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
    <Stack
    sx={{
      backgroundImage: `linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)`
    }}
    display='flex'
    alignItems="center"
    justifyContent="center"
    flexDirection='row'
    width='100vw'
    height='100vh'
    >
      <SpinBox />
      <Stack
      flex='1'
    display='flex'
    alignItems="center"
    justifyContent="center"
    flexDirection='column'
    // borderLeft='1px solid green'
    // backgroundColor='grey'
    // width='50vw'
    // height='100vh'
    p='50px'
    pt='0'
    >
      <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'green' ,width:{ lg: '300px', xs: '250px' },}}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered >
            <Tab label="SignIn" value="0" />
            <Tab label="SignUp" disabled={user?true:false} value="1" />
        </Tabs>
      </Box>
        <TabPanel value="0">
          <SignInTab />
        </TabPanel>
        <TabPanel value="1">
          <SignUpTab setValue={setValue}/>
          </TabPanel>
        </TabContext>
      </Stack>
    </Stack>
  );
}

export default SignIn;