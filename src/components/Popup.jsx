/* eslint-disable */
import React from 'react';

export const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};
