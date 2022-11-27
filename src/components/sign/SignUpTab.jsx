import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";
import { Box,Button,TextField,Stack } from '@mui/material';

function SignUpTab() {
  const {signIn, signUp,user,signOutUser,signInWithGoogle,findInfo} = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSingUp = async (e) => {
    handleSignOut()
    console.log(email,password)

    if (!email || !password) {
      return setError("Please fill in all fields");
    }

    try {
      setLoading(true);
      await signUp(email, password).then(result=>{
        console.log(`sigup`,result)
      });
      navigate("/userInfo", { replace: true })

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

  const handleSignOut = async (e)=>{
    try {
      setLoading(true);
      await signOutUser()
    } catch (error) {
      setError(error.message);
    }
  }

  const handleSkip =()=>{
    navigate(`/loading`, { replace: true })
    setTimeout(fun=>{
      navigate(`/`, { replace: true })
    }, 600)
  }

  return (
    <Stack
    component="form"
    sx={{
      gap:'15px',
      flexDirection: "column",
    }}
    noValidate
    autoComplete="off"
    >
  <Box sx={{color:'green',fontWeight:'1000',fontSize:'38px'}} >Sign Up</Box>
    <TextField
      sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px',color: 'green' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
      id="outlined-required"
      label="Email"
      value={email}
      onChange = {e => setEmail(e.target.value)}
      required
    />
    <TextField
      sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px',color: 'green' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
      id="outlined-password-input"
      label="Password"
      type="password"
      value={password}
      onChange = {e => setPassword(e.target.value)}
      required
    />
    {message && <Box sx={{color:'green',fontWeight:'1000'}} >{message}!</Box>}
    {error && <Box sx={{color:'green',fontWeight:'1000'}}>{error}!</Box>}
    <Button
        sx={{
          width: { lg: '300px', xs: '250px' },
          color:'green',
          border:'1px solid green'
        }}
        onClick={handleSingUp}
          variant="outlined">Submit</Button>
            <Button
          sx={{
            width: { lg: '300px', xs: '250px' },
            color:'green',
            border:'1px solid green'
          }}
          onClick={handleGoogleSignIn}
            variant="outlined">SignUp with Google</Button>
     <Box sx={{cursor:'pointer',textDecoration:'underline',color:'green',textAlign:'right'}} onClick={handleSkip}>Skip as guest</Box>
    </Stack>
  );
}

export default SignUpTab;