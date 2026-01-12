import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css'; // Ensures styles load

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To check which page is active

  // Function to determine if link is active
  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO - pointing to images in public folder */}
        <Link to="/" className="logo">
          <img src="/NISAA_Logo.png" alt="Nisaa Logo" />
        </Link>

        <div className={`nav-island ${isOpen ? "active" : ""}`} id="nav-links">
          <Link to="/" className={isActive("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={isActive("/about")} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/programs" className={isActive("/programs")} onClick={() => setIsOpen(false)}>Our Programs</Link>
          <Link to="/blog" className={isActive("/blog")} onClick={() => setIsOpen(false)}>Blogs & Updates</Link>
          <Link to="/gallery" className={isActive("/gallery")} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className={isActive("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <Link to="/donate" className="btn-donate desktop-donate">Donate</Link>
        
        {/* Hamburger Menu Toggle */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


