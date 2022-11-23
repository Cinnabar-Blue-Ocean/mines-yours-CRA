import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function PhotoUploadButton() {
  return (
    <div style={{marginLeft: 10, marginTop: 0}}>
      <Button fullWidth={true} variant="outlined" component="label" color='primary'>
        Upload Photos
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <AddAPhotoOutlinedIcon />
      </IconButton>
    </div>
  );
}