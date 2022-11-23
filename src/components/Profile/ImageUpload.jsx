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

function ImageUpload({imageUrls, setImageUrls}) {
  const [imageUpload, setImageUpload] = useState(null);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    e.preventDefault()
    if (imageUpload == null) return;
    const imageRef = ref(storage, `listings/${imageUpload.name + v4()}`);
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
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url, i) => {
        return <img key={i} src={url} width={70} height={70}/>;
      })}
    </div>
  );
}

export default ImageUpload;