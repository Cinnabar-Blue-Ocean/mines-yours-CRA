import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/authMethods.js";
import { Box,Button,TextField,Stack } from '@mui/material';
import SpinBox from '../components/sign/spinBox.jsx'
import ImageUpload from '../components/Profile/ImageUpload.jsx'



function CollectUserInfo() {
  const {signIn, signInWithGoogle, resetPassword,signOutUser,user,addData} = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [username, setUsername] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [error, setError] = useState(null);
  const [imageUrls,setImageUrls]=useState([])

  const navigate = useNavigate();

  const handleSubmit = async()=> {

    if (!firstName || !lastName || !username || !zipCode || !aboutMe) {
      return setError("Please fill in all fields");
    }

    const userRef = {
      email:user?.email,
      first_name:firstName,
      last_name:lastName,
      username:username,
      zip_code:zipCode,
      rating:null,
      bio:aboutMe,
      profile_image:imageUrls[0],
      status:'active'
    }
    console.log('userRef',userRef)
    await addData(userRef)
    navigate(`/profile/${user.uid}`, { replace: true })
  }


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
        p='30px'
        gap='15px'
    >
    <Box sx={{color:'green',fontWeight:'1000',fontSize:'38px'}} >User Info</Box>
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined"
        label="First Name"
        value={firstName}
        onChange = {e => setFirstName(e.target.value)}
        required
      />
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined-password-input"
        label="Last Name"
        type="text"
        value={lastName}
        onChange = {e => setLastName(e.target.value)}
        required
      />
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined-password-input"
        label="username"
        type="text"
        value={username}
        onChange = {e => setUsername(e.target.value)}
        required
      />
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined-password-input"
        label="About Me"
        type="text"
        rows={5}
        multiline
        value={aboutMe}
        onChange = {e => setAboutMe(e.target.value)}
        required
      />
      <TextField
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '300px', xs: '250px' }, borderRadius: '40px' }}
        id="outlined-password-input"
        label="ZipCode"
        type="text"
        value={zipCode}
        onChange = {e => setZipCode(e.target.value)}
        required
      />
      <ImageUpload imageUrls={imageUrls} setImageUrls={setImageUrls} path={'userPhoto'} style={{
            width: { lg: '300px', xs: '250px' },
            color:'green',
            border:'1px solid green'
          }}
          wrapStyle={
          {display:'flex',
          flexDirection:'column',
          gap:'15px'}}/>
      {error && <Box sx={{color:'green',fontWeight:'1000'}}>{error}!</Box>}
      <Button
          sx={{
            width: { lg: '300px', xs: '250px' },
            color:'green',
            border:'1px solid green'
          }}
        onClick={handleSubmit}
          variant="outlined">Submit</Button>
      </Stack>
    </Stack>
  );
}

export default CollectUserInfo;