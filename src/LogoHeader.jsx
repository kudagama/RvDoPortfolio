import React, { useState, useEffect } from 'react';
import './LogoHeader.css';
import logo from './assets/logorv.jpg';
import { useTheme } from './ThemeContext';

const LogoHeader = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="logo-header-wrapper">
      <div className="logo-header">
        <div className="logo-section">
          <img src={logo} alt="Company Logo" className="logo" />
          <h1 className="logo-title">RvDo Developers</h1>
        </div>
        <div className="nav-container">
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" 
               className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
               onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#services" 
               className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
               onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#projects" 
               className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
               onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" 
               className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
               onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoHeader;
