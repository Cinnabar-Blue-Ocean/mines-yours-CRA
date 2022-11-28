import React from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <VideoCallIcon className="MUI"/>
          <PersonAddIcon className="MUI"/>
          <MenuIcon className="MUI"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;