import React from 'react';
import './ProjectModal.css';
import ImageViewer from './ImageViewer';

// Import project images
// Courier Management System
import track0 from './projectimages/track0.png';
import track1 from './projectimages/track1.png';
import track2 from './projectimages/track2.png';
import track3 from './projectimages/track3.png';

// Student Hostel Management System
import hostel0 from './projectimages/hostel0.png';
import hostal1 from './projectimages/hostal1.png';
import hostal2 from './projectimages/hostal2.png';
import hostelScreenshot1 from './projectimages/screencapture-localhost-thisara-assignment-2025-05-23-18_35_52.png';
import hostelScreenshot2 from './projectimages/screencapture-localhost-thisara-assignment-studentpanel-php-2025-05-23-18_43_16.png';

// Auction Platform
import auction0 from './projectimages/auction0.png';
import auction1 from './projectimages/auction1.png';
import auction2 from './projectimages/auction2.png';

// DocLink
import doclink0 from './projectimages/doclink0.jpg';
import doclink1 from './projectimages/doclink1.jpg';
import doclink2 from './projectimages/doclink2.jpg';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = React.useState(false);

  if (!isOpen || !project) return null;

  // Project images mapping using actual imported images
  const projectImages = {
    "Courier Management System": [track0, track1, track2, track3],
    "Student Hostal Management System": [hostel0, hostal1, hostal2, hostelScreenshot1, hostelScreenshot2],
    "Auction Platform": [auction0, auction1, auction2],
    "DocLink": [doclink0, doclink1, doclink2],
    // Keep placeholder images for projects without actual images
    "Handicraft E-Commerce": [
      "https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Handicraft+E-Commerce+1",
      "https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Handicraft+E-Commerce+2",
      "https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Handicraft+E-Commerce+3"
    ],
    "GreenBasket": [
      "https://via.placeholder.com/600x400/45B7D1/FFFFFF?text=GreenBasket+1",
      "https://via.placeholder.com/600x400/45B7D1/FFFFFF?text=GreenBasket+2",
      "https://via.placeholder.com/600x400/45B7D1/FFFFFF?text=GreenBasket+3"
    ],
    "Nurse Allocation System": [
      "https://via.placeholder.com/600x400/96CEB4/FFFFFF?text=Nurse+Allocation+System+1",
      "https://via.placeholder.com/600x400/96CEB4/FFFFFF?text=Nurse+Allocation+System+2",
      "https://via.placeholder.com/600x400/96CEB4/FFFFFF?text=Nurse+Allocation+System+3"
    ],
    "FoxFlair": [
      "https://via.placeholder.com/600x400/FFEAA7/000000?text=FoxFlair+1",
      "https://via.placeholder.com/600x400/FFEAA7/000000?text=FoxFlair+2",
      "https://via.placeholder.com/600x400/FFEAA7/000000?text=FoxFlair+3"
    ],
    "Security Alarm System": [
      "https://via.placeholder.com/600x400/FF8C42/FFFFFF?text=Security+Alarm+System+1",
      "https://via.placeholder.com/600x400/FF8C42/FFFFFF?text=Security+Alarm+System+2",
      "https://via.placeholder.com/600x400/FF8C42/FFFFFF?text=Security+Alarm+System+3"
    ]
  };

  const images = projectImages[project.name] || [];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <div className="project-title">
              <span className="project-icon">{project.icon}</span>
              <h2>{project.name}</h2>
            </div>
            <div className="project-tech">
              <span className="tech-badge">{project.tech}</span>
              <span className="category-badge">{project.category}</span>
            </div>
          </div>

          <div className="modal-body">
            <p className="project-description">{project.description}</p>
            <p className="project-details">{project.details}</p>
            
            <div className="project-images">
              <h3>Project Screenshots</h3>
              <div className="images-grid">
                {images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img 
                      src={image} 
                      alt={`${project.name} screenshot ${index + 1}`}
                      loading="lazy"
                      onClick={() => handleImageClick(image)}
                      className="clickable-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageViewer 
        image={selectedImage}
        isOpen={isImageViewerOpen}
        onClose={closeImageViewer}
      />
    </>
  );
};

export default ProjectModal; 