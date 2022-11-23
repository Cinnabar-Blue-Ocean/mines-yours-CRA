import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase/index.js";
import { v4 } from "uuid";
import {Button,Box} from '@mui/material';


function ImageUpload({ imageUrls, setImageUrls, path,style,wrapStyle}) {
  const [imageUpload, setImageUpload] = useState(null);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    console.log(imageUpload)
    e.preventDefault()
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${path}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <Box
      sx={wrapStyle}
    >
      <Button sx={style} fullWidth={false} variant="outlined" component="label" color='primary'>
      Select Photos
        <input
        hidden
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
      </Button>

      <Button sx={style} onClick={uploadFile} variant="outlined"> Upload Image</Button>
      <div>{imageUpload ? `${imageUpload.name}` : null}</div>
      {imageUrls.map((url, i) => {
        return <img key={i} src={url} width={90} height={90} />;
      })}
    </Box>
  );
}

export default ImageUpload;