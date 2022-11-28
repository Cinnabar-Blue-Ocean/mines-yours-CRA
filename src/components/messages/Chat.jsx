import React, {useContext} from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "./ChatContext.js"
import {db, auth} from "../../firebase/index.js"




const Chat = () => {
  const {currentUser} = auth;
  const {data} = useContext(ChatContext);
  console.log(data)
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.username}</span>
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