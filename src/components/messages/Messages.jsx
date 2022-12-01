import React,{useContext, useState, useEffect} from 'react';
import Message from './Message'
import { ChatContext } from "./ChatContext.js"
import { doc, onSnapshot } from 'firebase/firestore';
import {db, auth} from "../../firebase/index.js"


const Messages = () => {
  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  }, [data.chatId])

  return (
    <div className="messages">
      {messages.map(message => (
        <Message message={message} key={message.id}/>
      ))}
    </div>
  )
}

export default Messages;
