import React, {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase/'
import { reportListing, updateListing, postTrade } from '../../../firebase/firestoreMethods.js';


export default function ModalButtonBar({ listing }) {
  const [user, setUser] = useState(null)
  const [showReport, setShowReport] = useState(false)
  const [showTradeConfirmation, setShowTradeConfirmation] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [])

  const sendReport = async () => {
    try {
      if (user) {
        reportListing(listing.listing_id)
      } else {
        throw new Error('You must be logged in to report a listing')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const sendTrade = async () => {
    try {
      const listingId = listing.listing_id
      console.log(listing)
      if (user) {
        await updateListing(listingId, {status: 'unavailable'})
        let trade = await postTrade(listingId, user.uid, listing.end_date)
        console.log('Trade created with id: ', trade)
      } else {
        throw new Error('You must be logged in to start a trade')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <Stack spacing={2} direction="column">
        <Button variant="outlined" onClick={e => setShowTradeConfirmation(!showTradeConfirmation)}>Accept Offer</Button>
        {showTradeConfirmation ? <>
          You're about to start a trade with the owner, continue?
          <Stack spacing={2} direction="row">
            <Button variant="text" onClick={sendTrade}>Yes</Button>
            <Button variant="text" onClick={e => setShowTradeConfirmation(false)}>Cancel</Button>
          </Stack>
        </> : null}
        <Button variant="outlined" onClick={e => setShowReport(!showReport)}>Report Listing</Button>
        {showReport ? <>
          Are you sure you wish to report this listing?
          <Stack spacing={2} direction="row">
            <Button variant="text" onClick={sendReport}>Yes</Button>
            <Button variant="text" onClick={e => setShowReport(false)}>Cancel</Button>
          </Stack>
        </> : null}
      </Stack>
      </>
  );
}