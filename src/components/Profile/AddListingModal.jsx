import * as React from 'react';
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import DateSelector from './DateSelector.jsx'
import PhotoUploadButton from './PhotoUploadButton.jsx'
import PublishIcon from '@mui/icons-material/Publish';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ImageUpload from './ImageUpload.jsx'
import NewDateSelector from './NewDateSelector.jsx'
import moment from 'moment';
import {postListing} from '../../firebase/firestoreMethods.js'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 690,
  bgcolor: 'background.paper',
  border: '1px solid white',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
  borderRadius: 3,
  maxHeight: '80vh',
  overflowY: 'auto'
};

export default function AddListingModal({ open, handleClose }) {
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [tradeType, setTradeType] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);
  const [outValue, setValue] = useState(moment('2022-11-22T21:11:54'));
  const [inValue, setInValue] = useState(moment('2022-11-22T21:11:54'))


  const sendNewListing = () => {
    let info = {
      name: itemName,
      description: itemDesc,
      photos: imageUrls,
      type: tradeType,
      outDate: outValue._d,
      inDate: inValue._d,
    }
    console.log(info)
    //name, description, photos = [], type, zip_code
    postListing(itemName, itemDesc, imageUrls, tradeType, "zipcode")
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: 22 }}>Post Your Item</div>
              </div>

              <TextField
                required
                fullWidth={true}
                label="Item Name"
                value={itemName}
                onChange={(e) => { setItemName(e.target.value) }}
              />
              <TextField
                required
                multiline
                fullWidth={true}
                rows={5}
                error={itemDesc.length > 140 ? true : false}
                id="outlined-error-helper-text"
                label="Item Description"
                value={itemDesc}
                onChange={(e) => { setItemDesc(e.target.value) }}
                helperText={`Characters Left: ${140 - itemDesc.length}`}
              />
              <ImageUpload imageUrls={imageUrls} setImageUrls={setImageUrls}/>

              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 22, marginLeft: 8 }}>Trade or Loan?</div>
                <FormControlLabel sx={{ m: 2, ml: .5 }} control={<Switch checked={tradeType}
                  onChange={(e) => { setTradeType(e.target.checked) }}
                  inputProps={{ 'aria-label': 'controlled' }} />} label={tradeType ? 'Trade' : 'Loan'} />
              </div>
              <div>
                {tradeType ? null : <DateSelector inValue={inValue} outValue={outValue} setValue={setValue} setInValue={setInValue}/>}

              </div>
              <div style={{ marginLeft: 145 }}>
                <Button onClick={sendNewListing} variant="contained" endIcon={<PublishIcon />}>
                  Post Item
                </Button>
              </div>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

/*
 <Switch
      checked={tradeType}
      onChange={(e)=>{setTradeType(e.target.checked)}}
      inputProps={{ 'aria-label': 'controlled' }}
    />
*/