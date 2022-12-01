import React, {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import {db, auth} from "../../firebase/index.js"
import { ChatContext } from "./ChatContext.js"
import {v4 as uuid} from 'uuid'
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

const Input = ({data}) => {
  const [text, setText] = useState("")
  const [img,setImg] = useState(null)

  const {currentUser} = auth;
  // const {data} = ChatContext;
  // adding image 1:53:30
  const handleSend = async () => {
    if (img) {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now()
        })
      })
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId+".data"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId+".data"]: serverTimestamp()
    })
    setText("")
    setImg(null)
  }
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." value={text}onChange={e => setText(e.target.value)}/>
      <div className="send">
        <AttachFileIcon className="MUI"/>
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <ImageIcon className="MUI"/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input;