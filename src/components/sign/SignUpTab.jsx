import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";
import { Box,Button,TextField } from '@mui/material';

function SignUpTab() {
  const {signIn, signUp,user,signOutUser} = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
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

  const handleSignOut = async (e)=>{
    try {
      setLoading(true);
      await signOutUser()
    } catch (error) {
      setError(error.message);
    }
  }


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
  <h3>Sign up</h3>
    <TextField
      id="outlined-required"
      label="Email"
      value={email}
      onChange = {e => setEmail(e.target.value)}
    />
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      value={password}
      onChange = {e => setPassword(e.target.value)}
    />
    <Button
        sx={{
          m: 1,
          width: '25ch'
        }}
        onClick={handleSingUp}
          variant="outlined">Submit</Button>
    </Box>
  );
}

export default SignUpTab;