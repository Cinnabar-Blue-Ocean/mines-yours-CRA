import "../components/messages/style.scss"
import React, { useState } from 'react';
import LandingPage from '../components/Landing Page/LandingPage'
import Navbar from '../components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/Profile/AnimatedPage'
import MessagesModal from './MessagesModal'
import Modal from '../components/modal/modal.jsx';
import Button from '@mui/material/Button';


const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <AnimatedPage>
        <Navbar />
        <LandingPage />
        <Button
          onClick={() => setShow(true)}
          sx={{ my: 2, color: '#398378', display: 'block' }}
        >
          Messages
        </Button>
        <Modal show={show} onClose={() => setShow(false)}>
          <div className="modal-footer">
            <Button
              onClick={() => setShow(false)}
              sx={{ my: 2, ml: 10, color: '#398378', display: 'block' }}
            >
              Close
            </Button>
          </div>
          <MessagesModal />
        </Modal>
      </AnimatedPage>
    </Box>
  );
};

export default Home;