import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // Ensure CSS is imported

const Footer = () => {
  return (
    <footer id="contact">
        <div className="footer-curve"></div>
        
        <div className="container footer-inner">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2 className="logo-text">NISAA<span className="dot">.</span></h2>
                    <p>Restoring dignity, healing families, and empowering the next generation.</p>
                </div>
                
                <div className="footer-newsletter">
                    <span>Join our community</span>
                    <div className="input-group">
                        <input type="email" placeholder="Enter your email..." />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-grid">
                <div className="f-col">
                    <h4>Explore</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/programs">Our Programs</Link>
                </div>
                
                <div className="f-col">
                    <h4>Support</h4>
                    <Link to="/donate">Donate</Link>
                    <Link to="/contact">Volunteer</Link>
                    <Link to="/contact">Partner with us</Link>
                </div>

                <div className="f-col contact-col">
                    <h4>Contact Us</h4>
                    <p style={{ display: 'flex', gap: '10px' }}>
                        <i className="fas fa-map-marker-alt" style={{ marginTop: '5px' }}></i> 
                        <span>4944 Franklin Avenue, Suite P<br />Des Moines, IA 50310</span>
                    </p>
                    <p><i className="fas fa-phone"></i> 515-255-5430</p>
                    <p><i className="fas fa-life-ring"></i> Helpline: 1844-269-6203</p>
                    <p><i className="fas fa-fax"></i> Fax: 515-255-4517</p>
                    <p><i className="fas fa-envelope"></i> Contact@nisaa-afs.org</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Nisaa African Family Services. All Rights Reserved.</p>
                <div className="footer-socials">
                     <a href="https://www.instagram.com/nisaa.afs/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/NisaaAfricanFamilyServices/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/nisaa-african-family-services" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            {/* --- NEW SECTION: YOUR CLICKABLE LOGO (EMAIL) --- */}
<div className="developer-credit">
    <span>Designed by</span>
    
    {/* Replace with your actual email address */}
    <a href="mailto:itsmeaidenj@email.com" className="dev-link">
        <img src="/arden-logo.png" alt="Arden Design" className="dev-logo" />
    </a>
</div>

        </div>
    </footer>
  );
};

export default Footer;