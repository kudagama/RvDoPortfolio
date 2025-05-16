
import LogoHeader from './LogoHeader';
import "./Portfolio.css";
import aboutImage from './assets/about-us-1.png';
import React, { useEffect } from "react"; 

export default function Portfolio() {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Block F12, Ctrl+Shift+I/J/C, Ctrl+U
    const blockDevTools = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", blockDevTools);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", blockDevTools);
    };
  }, []);

  const projects = [
    {
      name: "Courier Management System",
      tech: "Java",
      description: "Efficient parcel tracking and delivery management software.",
      icon: "📦",
      category: "Software"
    },
    {
      name: "Handicraft E-Commerce",
      tech: "React + Laravel",
      description: "A custom platform to sell and manage local handmade crafts.",
      icon: "🛍️",
      category: "Web"
    },
    {
      name: "Auction Platform",
      tech: "React",
      description: "A web application for online auctions and bidding.",
      icon: "💰",
      category: "Web"
    },
    {
      name: "GreenBasket",
      tech: "HTML + CSS + JS + PHP",
      description: "A web application for managing and selling organic produce.",
      icon: "🥦",
      category: "Web"
    },
    {
      name: "Nurse Allocation System",
      tech: "HTML + CSS + JS + PHP",
      description: "A web application for managing nurse allocations and schedules.",
      icon: "👩‍⚕️",
      category: "Web"
    },
    {
    name: "FoxFlair",
    tech: "HTML + CSS + JS + PHP",
    description: "A web application for managing and selling clothes and cosmetics.",
    icon: "👗",
    category: "Web"
  },
  {
    name: "Student Hostal Management System",
    tech: "HTML + CSS + JS + PHP",
    description: "A web application for managing student hostal data and attendance.",
    icon: "🏢",
    category: "Web"
  },
    {
      name: "Security Alarm System",
      tech: "ESP32 + React Native",
      description: "Real-time motion alerts with mobile notifications.",
      icon: "🚨",
      category: "IoT"
    },
    {
      name: "DocLink",
      tech: "Kotlin + Firebase",
description: `DocLink is designed to simplify the process of doctor appointments, providing a platform for patients to connect with healthcare providers efficiently. It aims to make healthcare more accessible, ensuring patients can schedule appointments conveniently and receive timely communication from their doctors.`,
      icon: "🚪",
      category: "Mobile App"
    }
  ];

  return (
    <div className="portfolio">
        <LogoHeader />
      <header className="header">
        <h1>RvDo Developers</h1>
        <p>Your Partner in Smart Software Solutions</p>
      </header>

      <section id="about" className="section about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <h3 className="about-subtitle">Transforming Ideas into Digital Reality</h3>
              <p className="about-description">
                RvDo Developers is a dynamic team of 11 passionate software engineers driven by innovation and excellence. With our diverse expertise in mobile apps, web applications, IoT, and system software, we're committed to delivering cutting-edge solutions that make a difference.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">11+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img src={aboutImage} alt="RvDo Developers Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <h2>Our Services</h2>
        <div className="services-container">
          <button className="scroll-button left" onClick={() => {
            const container = document.querySelector('.services-grid');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}>❮</button>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Android App Development</h3>
              <p>Create powerful mobile applications using Java and Kotlin with modern UI/UX principles</p>
              <div className="service-tech">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Kotlin</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Build responsive and dynamic web applications with cutting-edge technologies</p>
              <div className="service-tech">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Laravel</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>IoT Solutions</h3>
              <p>Develop smart and connected IoT devices with ESP32 and custom mobile apps</p>
              <div className="service-tech">
                <span className="tech-pill">ESP32</span>
                <span className="tech-pill">IoT</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Software Systems</h3>
              <p>Custom management systems for businesses with robust features and security</p>
              <div className="service-tech">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">SQL</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Create intuitive and beautiful user interfaces with modern design principles</p>
              <div className="service-tech">
                <span className="tech-pill">Figma</span>
                <span className="tech-pill">Adobe XD</span>
              </div>
            </div>
          </div>
          <button className="scroll-button right" onClick={() => {
            const container = document.querySelector('.services-grid');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}>❯</button>
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i} data-category={project.category}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <div className="project-tech">
                  <span className="tech-badge">{project.tech}</span>
                  <span className="category-badge">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <button 
                    className="learn-more" 
                    onClick={() => {
                      const projectLinks = {

                        "Courier Management System": "https://example.com/courier-management-system",
                        "Handicraft E-Commerce": "http://localhost:3001",
                        "Auction Platform": "http://localhost:3000",
                        "GreenBasket": "http://localhost/greenbasket/pages/index.php",
                        "Nurse Allocation System": "http://localhost/nurse_allocation_system/index.php",
                        "FoxFlair": "http://localhost/FoxFlair/pages/index.php",
                        "Student Hostal Management System": "http://localhost/thisara_assignment/index.php",
                        "Security Alarm System": "https://example.com/security-alarm-system",
                        "DocLink": "https://example.com/doclink"
                      };
                      window.open(projectLinks[project.name], '_blank');
                    }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              <div className="project-backdrop"></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+94 766088374</p>
                  <p className="availability">Available 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>saveenkudagama2002@gmail.com</p>
                  <p className="availability">Response within 24 hours</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Ahangama, Sri Lanka</p>
                  <p className="availability">Available for remote work globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} RvDo Developers. All rights reserved.
      </footer>
    </div>
  );
}
