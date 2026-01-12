import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition'; 

const Blog = () => {
  const [activeTab, setActiveTab] = useState('Articles');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle Resize for Responsive Layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageTransition> 
      
      <div className="blog-page">
         {/* HERO SECTION */}
        <header className="page-hero" style={{ paddingBottom: '40px', paddingTop: '100px' }}>
          <div className="container center-text">
              <span className="sub-head">Stay Connected</span>
              <h1>Voices of <br /><em>Nisaa</em></h1>
          </div>
        </header>

        {/* TABS & CONTENT SECTION */}
        <section className="section-padding bg-white" style={{ paddingTop: '0' }}>
          <div className="container">

              {/* TAB CONTROLS */}
              <div className="tab-controls" style={{ marginBottom: '60px', marginTop: '10px' }}>
                  <button 
                      className={`tab-btn ${activeTab === 'Articles' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Articles')}
                  >
                      <i className="fas fa-newspaper"></i> Community News
                  </button>
                  
                  <button 
                      className={`tab-btn ${activeTab === 'Events' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Events')}
                  >
                      <i className="fas fa-calendar-alt"></i> Upcoming Events
                  </button>
              </div>

              {/* ANIMATED CONTENT */}
              <AnimatePresence mode='wait'>
                
                {/* --- TAB 1: ARTICLES --- */}
                {activeTab === 'Articles' && (
                    <motion.div
                        key="Articles"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* FEATURED BLOG POST (Responsive Logic) */}
                        <Link to="/blog/gala" className="featured-blog" style={{ 
                            display: 'flex', 
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'stretch',
                            overflow: 'hidden', 
                            minHeight: isMobile ? 'auto' : '350px',
                            borderRadius: '24px', 
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
                            backgroundColor: 'white',
                            position: 'relative', 
                            zIndex: 2,
                            marginBottom: '60px'
                        }}>
                            {/* IMAGE SIDE */}
                            <div 
                                className="blog-img-box" 
                                style={{ 
                                    flex: isMobile ? 'none' : '1',
                                    width: '100%',
                                    height: isMobile ? '250px' : 'auto',
                                    backgroundImage: 'url("/1.jpg")', 
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#4A2C4A'
                                }}
                            >
                            </div>

                            {/* TEXT SIDE */}
                            <div className="blog-content" style={{ 
                                flex: '1', 
                                padding: isMobile ? '30px' : '50px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center' 
                            }}>
                                <span className="blog-tag">October 19, 2019</span>
                                <h3 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', marginTop: '10px' }}>
                                    1st Fundraising Gala: A Night to Remember
                                </h3>
                                <p>A historic milestone for our community. We gathered to celebrate our very first fundraising gala.</p>
                                <span className="read-more" style={{ marginTop: '20px' }}>Read Full Story <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </Link>

                        {/* OTHER BLOG POSTS GRID */}
                        <div className="board-grid">
                            <div className="blog-card">
                                <div className="blog-date">Oct 12, 2024</div>
                                <h3>Youth Leadership Camp</h3>
                                <p>Our summer interns presented their projects on mental health awareness in schools.</p>
                                <span className="read-more-small">Read More</span>
                            </div>

                            <div className="blog-card">
                                <div className="blog-date">Sep 05, 2024</div>
                                <h3>New Partnership Announced</h3>
                                <p>We are proud to partner with local legal clinics to offer free consultation days.</p>
                                <span className="read-more-small">Read More</span>
                            </div>
                                <div className="blog-card">
                                <div className="blog-date">Aug 20, 2024</div>
                                <h3>Domestic Violence Awareness</h3>
                                <p>Join us this October for a series of workshops aimed at prevention and safety.</p>
                                
                                {/* UPDATE THE LINK HERE: */}
                                <Link to="/blog/dv-awareness" className="read-more-small" style={{ cursor: 'pointer', textDecoration: 'none', color: '#BCA88E', fontWeight: 'bold' }}>
                                    Read More
                                </Link>
</div>
                        </div>
                                


                    </motion.div>
                )}

                {/* --- TAB 2: EVENTS --- */}
                {activeTab === 'Events' && (
                    <motion.div
                        key="Events"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="events-container"
                    >
                        <h3 style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>Mark Your Calendars</h3>

                        {/* EVENT CARD 1 */}
                        <div className="event-card" style={{ 
                            display: 'flex', 
                            backgroundColor: 'white', 
                            borderRadius: '16px', 
                            overflow: 'hidden', 
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            marginBottom: '30px',
                            border: '1px solid #eee'
                        }}>
                            {/* Date Box */}
                            <div style={{ 
                                backgroundColor: '#4A2C4A', 
                                color: 'white', 
                                minWidth: '100px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                padding: '20px'
                            }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>OCT</span>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1' }}>15</span>
                            </div>

                            {/* Details */}
                            <div style={{ padding: '30px', flex: 1 }}>
                                <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Annual Community Picnic</h3>
                                <p style={{ color: '#666', marginBottom: '15px' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#BCA88E' }}></i> 
                                    City Park, Main Pavilion &nbsp;|&nbsp; 12:00 PM - 4:00 PM
                                </p>
                                <p>Join us for an afternoon of food, cultural performances, and family-friendly activities. Everyone is welcome!</p>
                            </div>
                        </div>

                        {/* EVENT CARD 2 */}
                        <div className="event-card" style={{ 
                            display: 'flex', 
                            backgroundColor: 'white', 
                            borderRadius: '16px', 
                            overflow: 'hidden', 
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            marginBottom: '30px',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ 
                                backgroundColor: '#BCA88E', 
                                color: 'white', 
                                minWidth: '100px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                padding: '20px'
                            }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NOV</span>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1' }}>02</span>
                            </div>

                            <div style={{ padding: '30px', flex: 1 }}>
                                <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Domestic Violence Workshop</h3>
                                <p style={{ color: '#666', marginBottom: '15px' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#BCA88E' }}></i> 
                                    Nisaa Center, Room B &nbsp;|&nbsp; 6:00 PM - 8:00 PM
                                </p>
                                <p>An educational session focused on recognizing signs of abuse and supporting survivors in our community.</p>
                            </div>
                        </div>

                    </motion.div>
                )}

              </AnimatePresence>

          </div>
        </section>
      </div>

    </PageTransition> 
  );
};

export default Blog;