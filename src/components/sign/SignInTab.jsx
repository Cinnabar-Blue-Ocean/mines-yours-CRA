import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";
import { Paper,Box,Button,TextField,Tab,Tabs} from '@mui/material';
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

  // const handlePassword = async () => {
  //   setMessage(null);
  //   setError(null);

  //   const { email } = values;

  //   if (!email) {
  //     return setError("Please enter an email first");
  //   }

  //   try {
  //     setLoading(true);
  //     await resetPassword(email);
  //     setMessage("Successfully sent email reset link");
  //   } catch (error) {
  //     setError(error.message);
  //   }

  //   setLoading(false);
  // };

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
        mb: '2em'
      }}
      noValidate
      autoComplete="off"
    >
      {!user?
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
        mb: '2em'
      }}
      noValidate
      autoComplete="off"
      >
      <h3>Sign In</h3>
      <TextField
        id="outlined"
        label="Email"
        value={loginEmail}
        onChange = {e => setLoginEmail(e.target.value)}
        required
        width = '25ch'
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={loginPassword}
        onChange = {e => setLoginPassword(e.target.value)}
        width = '25ch'
        required
      />
      <Button
        sx={{
          m: 1,
          mb: 5,
          width: '25ch'
        }}
        onClick={handleSignIn}
          variant="outlined">Log In
      </Button>
      <Button
          sx={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}
          onClick={handleGoogleSignIn}
            variant="outlined">SignIn with Google</Button>
      <Button
        sx={{
          m: 1,
          width: '25ch'
        }}
        onClick={()=>navigate("/signUp", { replace: true })}
          variant="outlined">SignUp</Button>
      </Box>
      :
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column",
        mb: '2em'
      }}
      noValidate
      autoComplete="off"
      >
      Currently Signed In User: {user?.email}
      Currently UserId: {user?.uid}
      <SignOut style={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}/>
      </Box>
      }
    </Box>
  );
}

export default SignInTab;