import React from 'react';
import './Alert.css';

function Alert({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="alert">
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Alert;
