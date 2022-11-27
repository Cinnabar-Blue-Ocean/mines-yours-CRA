import React, {useState, useEffect} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import {db, auth} from "../../firebase/index.js"

const Chats = () => {
  const [chats, setChats] = useState([])
  const {currentUser} = auth;

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
  return (
    <div className="chats">
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;