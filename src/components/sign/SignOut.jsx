import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authMethods.js";
import { Button} from '@mui/material';

function SignOut({ style }) {
  const {user,signOutUser} = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignOut = async (e)=>{
    e.preventDefault()
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

  return (
    <Button
    sx={style}
    onClick={handleSignOut}
      variant="outlined">Log Out
    </Button>
  );
}

export default SignOut;