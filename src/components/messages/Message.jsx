import React from 'react';
import {db, auth} from "../../firebase/index.js"
import { ChatContext } from "./ChatContext.js"

const Message = ({message}) => {
  const {currentUser} = auth;
  const {data} = ChatContext;
  console.log(message)
  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
      </div> */}

    </div>
  )
}

export default Message;