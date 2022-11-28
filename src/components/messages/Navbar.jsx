import React,{useState} from 'react';
import {db, auth} from "../../firebase/index.js"
const Navbar = (props) => {
  const [logout, setLogout] = useState(false)
  const {currentUser} = auth;
  console.log(currentUser)
  return (
    <div className="navbar">
      <span className="logo">Mines Yours</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13379797/pexels-photo-13379797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>{currentUser.email}</span>
        {logout && <button>logout</button>}
      </div>
    </div>
  )
}

export default Navbar;