import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Box,Button,TextField } from '@mui/material';

function SignIn() {
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

  const handleSignOut = async (e)=>{
    // e?e.preventDefault():null;
    try {
      await signOutUser()
      setLoading(true);
      console.log(user)
      navigate(`/loading`, { replace: true })
      await setTimeout(fun=>{
        navigate(`/`, { replace: true })
      }, 600)
    } catch (error) {
      setError(error.message);
    }

  }

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
    <>
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
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={loginPassword}
        onChange = {e => setLoginPassword(e.target.value)}
        required
      />
      <Button
        sx={{
          m: 1,
          mb: 5,
          width: '25ch'
        }}
        onClick={handleSignIn}
          variant="outlined">Log In</Button>
      Currently Signed In User: {user?.email}
      Currently UserId: {user?.uid}
      <Button
          sx={{
            m: 1,
            mt: 5,
            width: '25ch'
          }}
          onClick={handleSignOut}
            variant="outlined">Log Out</Button>
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
    </>
  );
}

export default SignIn;