import React, {useState, useEffect} from 'react';
import {
  collection,
  query,
  where,
  getDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  serverTimestamp
} from "firebase/firestore"
import {db, auth} from "../../firebase/index.js"

const Search = () => {
  const [searchUser, setSearchUser] = useState('')
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = auth;

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("username", "==" , searchUser))
    console.log('query!')
    console.log(currentUser)
    try {
      console.log('in')
      const querySnapshot = await getDocs(q)
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        if (doc.data())
        setUser(doc.data())
        setUserId(doc.id)
      })

    } catch (err) {
      console.log(err)
      setErr(true);
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    console.log('clicked')
    //check whether the gorup(chats in firestore) exists, if not create
    const combinedId = currentUser.uid > userId ? currentUser.uid + userId : userId + currentUser.uid
    try {
      console.log('one')
      const res = await getDoc(doc(db, "chats", combinedId))
      console.log('two')
      if (!res.exists()) {
        console.log('three')
        // create a chat in chats collection
        await setDoc(doc(db,"chats", combinedId), {messages: []})
        console.log('making')
        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId+".userInfo"]: {
            uid:userId,
            username: user.username,
          },
          [combinedId+".date"]: serverTimestamp()
        });
        console.log('made')
        // photoURL:user.photoURL
        await updateDoc(doc(db, "userChats", userId), {
          [combinedId+".userInfo"]: {
            uid:currentUser.uid,
            username: currentUser.email,
          },
          [combinedId+".date"]: serverTimestamp()
        })
        console.log("final")
        // photoURL:currentUser.photoURL
      }
    } catch (err) {
      console.log(err)
    }
    setUser(null)
    setSearchUser("")
  }
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" value={searchUser}onKeyDown={handleKey} onChange={e => setSearchUser(e.target.value)}/>
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt=""/>
        <div className="userChatInfo">
          <span>{user.username}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;