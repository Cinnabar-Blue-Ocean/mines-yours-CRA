import React from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <AttachFileIcon className="MUI"/>
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <ImageIcon className="MUI"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;