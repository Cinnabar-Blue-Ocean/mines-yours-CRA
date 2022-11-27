import React from 'react';
import Navbar from './Navbar.jsx'
import Search from './Search.jsx'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar;