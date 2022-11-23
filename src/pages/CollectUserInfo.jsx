import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Box,Button,TextField } from '@mui/material';

function CollectUserInfo() {
  const {signIn, signInWithGoogle, resetPassword,signOutUser,user,addData} = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async()=> {

    const userRef = {
      email:user?.email,
      first_name:firstName,
      last_name:lastName,
      zip_code:zipCode
    }
    console.log('userRef',userRef)
    await addData(userRef)
    navigate(`/profile/${user.uid}`, { replace: true })
  }


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
    Currently Signed In User: {user?.email}
    <h3>User Info</h3>
      <TextField
        id="outlined"
        label="First Name"
        value={firstName}
        onChange = {e => setFirstName(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Last Name"
        type="text"
        value={lastName}
        onChange = {e => setLastName(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="ZipCode"
        type="text"
        value={zipCode}
        onChange = {e => setZipCode(e.target.value)}
      />
      <Button
        sx={{
          m: 1,
          mb: 5,
          width: '25ch'
        }}
        onClick={handleSubmit}
          variant="outlined">Submit</Button>
    </Box>
      <hr />

    {/* { user ? <TestDB /> : null } */}
    </>
  );
}

export default CollectUserInfo;