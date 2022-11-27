import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";
import { Paper,Box,Button,TextField,Tab,Tabs,Link,Stack} from '@mui/material';
import {TabPanel} from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import SignOut from './SignOut.jsx';

function SignInTab() {
  const {signIn, signInWithGoogle, resetPassword,signOutUser,user,findData} = useAuth();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      console.log(user?.uid)
      console.log(user)
  }, [googleLoading]);


  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log(loginEmail,loginPassword)

    if (!loginEmail || !loginPassword) {
      return setError("Please fill in all fields");
    }

    try {
      setLoading(true);
      const user = await signIn(loginEmail, loginPassword);
      navigate(`/profile/${user.user.uid}`, { replace: true })

    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    await signOutUser()
    try {
      await signInWithGoogle().then(result=>{
        console.log(`result`,result)
        findInfo(result)
      });
      setGoogleLoading(true);
    } catch (error) {
      setError(error.message);
    }

    setGoogleLoading(false);
  };

  const findInfo= async (user)=>{
    const result = await findData(user.user.uid)
    console.log('result',result)
    if (result.exists()) {
      navigate(`/loading`, { replace: true })
      await setTimeout(fun=>{
        navigate(`/profile/${user.user.uid}`, { replace: true })
      }, 600)
      // navigate(`/profile/${user.user.uid}`, { replace: true })
    } else {
      navigate(`/loading`, { replace: true })
      await setTimeout(fun=>{
        navigate("/userInfo", { replace: true })
      }, 600)
      // navigate("/userInfo", { replace: true })
    }
  }

  const handlePassword = async () => {
    console.log('hello')
    console.log(loginEmail)
    setMessage(null);
    setError(null);

    if (!loginEmail) {
      return setError("Please enter an email first");
    }

    try {
      console.log('are we here')
      setLoading(true);
      await resetPassword(loginEmail);
      setMessage("Successfully sent email reset link");
    } catch (error) {
      console.log(error)
      setError(error.message.slice(10));
    }

    setLoading(false);
  };

  const handleSkip =()=>{
    navigate(`/loading`, { replace: true })
    setTimeout(fun=>{
      navigate(`/`, { replace: true })
    }, 600)
  }
  return (
    <>
      {!user?
      <Stack
      component="form"
      sx={{
        gap:'15px',
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
      >
      <Box sx={{color:'green',fontWeight:'1000',fontSize:'38px'}} >Sign In</Box>
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' ,color: 'green'}, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined"
        label="Email"
        value={loginEmail}
        onChange = {e => setLoginEmail(e.target.value)}
        required
        width = '25ch'
      />
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' ,color: 'green'}, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined-password-input"
        label="Password"
        type="password"
        value={loginPassword}
        onChange = {e => setLoginPassword(e.target.value)}
        width = '25ch'
        required
      />
        {message && <Box sx={{color:'green',fontWeight:'1000'}} >{message}!</Box>}
        {error && <Box sx={{color:'green',fontWeight:'1000'}}>{error}!</Box>}
      <Box sx={{cursor:'pointer',textDecoration:'underline',color:'green',textAlign:'right'}} onClick={handlePassword}>Forgot password?</Box>
      <Button
        sx={{
          width: { lg: '300px', xs: '250px' },
          color:'green',
          border:'1px solid green'
        }}
        onClick={handleSignIn}
          variant="outlined">Log In
      </Button>
      <Button
          sx={{
            width: { lg: '300px', xs: '250px' },
            color:'green',
            border:'1px solid green'
          }}
          onClick={handleGoogleSignIn}
            variant="outlined">SignIn with Google</Button>
       <Box sx={{cursor:'pointer',textDecoration:'underline',color:'green',textAlign:'right'}} onClick={handleSkip}>Skip as guest</Box>
      </Stack>
      :
      <Stack
      component="form"
      sx={{
        gap:'25px',
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center'
      }}
      noValidate
      autoComplete="off"
      >
      <Box sx={{color:'green',fontWeight:'1000',fontSize:'38px',textAlign:'center'}}>WelCome Back: {user?.email}</Box>
      <SignOut style={{
            border:'1px solid green',
            color:'green',
            width: '300px'
          }}/>
       <Box sx={{cursor:'pointer',textDecoration:'underline',color:'green',textAlign:'right'}} onClick={handleSkip}>Go to the home</Box>
      </Stack>
      }
      </>
  );
}

export default SignInTab;