import React, {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../../firebase/'


export default function ModalButtonBar() {
  const [user, setUser] = useState(null)
  const [showReport, setShowReport] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [])

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Outlined</Button>
      <Stack spacing={2} direction="column">
        <Button variant="outlined" onClick={e => setShowReport(true)}>Report Listing</Button>
        {showReport ? <>
          Are you sure you wish to report this listing?
          <Stack spacing={2} direction="row">
            <Button variant="text">Yes</Button>
            <Button variant="text" onClick={e => setShowReport(false)}>Cancel</Button>
          </Stack>
        </> : null}
      </Stack>
    </Stack>
  );
}