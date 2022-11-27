import React, {useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore"
import {db} from "../../firebase/index.js"
const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==" , username))
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(doc.id)
      })

    } catch (err) {
      setErr(true);
    }
  }

  const handleKey = e=> {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = () => {
    //check whether the gorup(chats in firestore) exists, if not create
    // const combinedId;
    // const res = await getDocs(db, "chats",)
  }
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}/>
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src="user.photoURL" alt=""/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;