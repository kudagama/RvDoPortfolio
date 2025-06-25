import React from 'react';
import './ImageViewer.css';

const ImageViewer = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-viewer-close" onClick={onClose}>×</button>
        <div className="image-container">
          <img 
            src={image} 
            alt="Full size project screenshot"
            className="full-size-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer; 