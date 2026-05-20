import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();

  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar">
      <div className="nav-container">
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
          <Link to="/donate" className="mobile-only-donate" onClick={() => setIsOpen(false)}>Donate</Link>
        </div>

        <div className="nav-right-actions">
          <Link to="/shop" className="curio-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-shopping-bag"></i>
              <span className="curio-text">Curio Shop</span>
              {getCartCount() > 0 && (
                <span className="curio-badge">{getCartCount()}</span>
              )}
          </Link>
          
          <Link to="/donate" className="btn-donate desktop-donate" onClick={() => setIsOpen(false)}>
            Donate
          </Link>
          
          {/* Animated Hamburger / X */}
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;