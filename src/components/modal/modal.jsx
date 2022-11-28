import React, { useState, useEffect } from 'react';

const modalStyles = {
  position: 'fixed',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.1)',
  zIndex: '99999'
};

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div id="modal" className="modal" style={modalStyles}>
      <div className="modal-content">
        <div id="modal-body" className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Modal;