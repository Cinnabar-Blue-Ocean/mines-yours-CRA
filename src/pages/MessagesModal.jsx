import React from 'react';
import Sidebar from '../components/messages/Sidebar.jsx';
import Chat from '../components/messages/Chat.jsx';

const MessagesModal = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default MessagesModal;
