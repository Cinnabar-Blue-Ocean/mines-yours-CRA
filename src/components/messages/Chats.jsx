import React, {useState, useEffect, useContext} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import {db, auth} from "../../firebase/index.js"
import { ChatContext } from "./ChatContext.js"

const Chats = () => {
  const [chats, setChats] = useState([])
  const {currentUser} = auth;
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () =>{
        unsub();
      }
    }
    currentUser.uid && getChats()
  },[currentUser.uid])

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }

  return (
    <div className="chats">
      {chats ? Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
          <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <div className="userChatInfo">
            <span>{chat[1].userInfo.username}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
      </div>
        )) : null}
    </div>
  )
}

export default Chats;