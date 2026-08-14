import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition'; 

const Blog = () => {
  const [activeTab, setActiveTab] = useState('Articles');  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

                  <button
                      className={`tab-btn ${activeTab === 'Podcast' ? 'active' : ''}`}
                      onClick={() => setActiveTab('Podcast')}
                  >
                      <i className="fas fa-podcast"></i> Podcast
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

                        {/* OTHER BLOG POSTS GRID — descending order, Gala above is untouched */}
                        <div className="board-grid">

                            {/* Sep 21, 2026 */}
                            <Link to="/blog/pull-up-and-stitch-september" className="blog-card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div style={{
                                    width: '100%',
                                    height: '160px',
                                    backgroundImage: 'url("/ev5.jpg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <div style={{ padding: '20px', flex: 1 }}>
                                    <div className="blog-date">Sep 21, 2026</div>
                                    <h3>Pull Up & Stitch — Blessing Bags</h3>
                                    <p>We sewed blessing bags for unhoused community members alongside Rachel Reloaded & DSTNY Studio.</p>
                                    <span className="read-more-small" style={{ color: '#BCA88E', fontWeight: 'bold' }}>Read More</span>
                                </div>
                            </Link>

                            {/* May 17, 2026 */}
                            <Link to="/blog/pull-up-and-stitch" className="blog-card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div style={{
                                    width: '100%',
                                    height: '160px',
                                    backgroundImage: 'url("/nisaagrp3.jpeg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}></div>
                                <div style={{ padding: '20px', flex: 1 }}>
                                    <div className="blog-date">May 17, 2026</div>
                                    <h3>Pull Up & Stitch × Upstitch'd</h3>
                                    <p>Sewing, community, and a food drive at Nisaa — The Fashion Circuit's monthly workshop came to Franklin Ave.</p>
                                    <span className="read-more-small" style={{ color: '#BCA88E', fontWeight: 'bold' }}>Read More</span>
                                </div>
                            </Link>

                            {/* Jul 27, 2024 */}
                            <Link to="/blog/lauren-collins-wellness" className="blog-card" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div style={{
                                    width: '100%',
                                    height: '160px',
                                    background: 'linear-gradient(135deg, #4A2C4A 0%, #2d0a1f 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <i className="fas fa-hand-holding-heart" style={{ color: '#E8789A', fontSize: '3rem' }}></i>
                                </div>
                                <div style={{ padding: '20px', flex: 1 }}>
                                    <div className="blog-date">Jul 27, 2024</div>
                                    <h3>Free Physical Therapy with Lauren H. Collins Wellness</h3>
                                    <p>A weekend of free, trauma-informed healing services for Black survivors of DV and SA — right at Nisaa.</p>
                                    <span className="read-more-small" style={{ color: '#BCA88E', fontWeight: 'bold' }}>Read More</span>
                                </div>
                            </Link>

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
                        <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#4A2C4A', fontFamily: "'Cinzel', serif", fontSize: '1.8rem' }}>Mark Your Calendars</h3>
                        <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '0.95rem' }}>Upcoming events hosted at or in partnership with Nisaa African Family Services</p>

                        {/* PULL UP & STITCH — FEATURED RECURRING EVENT */}
                        <div style={{
                            background: 'white',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                            marginBottom: '30px',
                            border: '1px solid #f0e8d8'
                        }}>
                            {/* Top banner */}
                            <div style={{
                                background: 'linear-gradient(135deg, #4A2C4A 0%, #1a0a1a 100%)',
                                padding: '14px 30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '10px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#C0392B', color: 'white', padding: '3px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        Recurring Monthly
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Every Sunday · 12–3 PM</span>
                                </div>
                                <span style={{ color: '#C5A059', fontSize: '0.8rem', fontWeight: '600' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>
                                    4944 Franklin Ave, Suite P · Des Moines, IA
                                </span>
                            </div>

                            {/* Main content */}
                            <div style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>

                                {/* Date block */}
                                <div style={{
                                    background: '#4A2C4A',
                                    color: 'white',
                                    minWidth: '110px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '25px 20px',
                                    gap: '4px'
                                }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', opacity: 0.7, textTransform: 'uppercase' }}>JUN</span>
                                    <span style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>15</span>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>2026</span>
                                </div>

                                {/* Details */}
                                <div style={{ padding: '28px 30px', flex: 1, minWidth: '250px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#4A2C4A', fontFamily: "'Cinzel', serif" }}>
                                            Pull Up & Stitch
                                        </h3>
                                        <span style={{ fontFamily: "'Dancing Script', cursive", color: '#C5A059', fontSize: '1.3rem' }}>× Upstitch'd</span>
                                    </div>
                                    <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        A Monthly Sewing Workshop · Sewcial Impact by The Fashion Circuit
                                    </p>
                                    <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
                                        A hands-on sewing workshop open to all skill levels. Each month features a new project — past sessions have included embroidered tote bags, mending & repair, and DIY hair accessories. Free to attend; guests are invited to bring food donations for the Franklin Library Food Pantry.
                                    </p>

                                    {/* Tags */}
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                        {['Free Entry', 'All Skill Levels', 'Food Drive', 'Bring Donations'].map(tag => (
                                            <span key={tag} style={{
                                                background: '#faf6f0',
                                                color: '#4A2C4A',
                                                border: '1px solid #f0e8d8',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.78rem',
                                                fontWeight: '600'
                                            }}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                                        {/* Add to Google Calendar */}
                                        <a
                                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pull+Up+%26+Stitch+%C3%97+Upstitch%27d&dates=20250615T170000Z/20250615T200000Z&details=A+monthly+sewing+workshop+hosted+at+Nisaa+African+Family+Services.+Free+to+attend+%E2%80%94+bring+food+donations+for+the+Franklin+Library+Food+Pantry.&location=4944+Franklin+Ave+Suite+P,+Des+Moines,+IA+50310&recur=RRULE:FREQ%3DMONTHLY"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                background: '#4A2C4A',
                                                color: 'white',
                                                padding: '11px 22px',
                                                borderRadius: '50px',
                                                textDecoration: 'none',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            <i className="fas fa-calendar-plus"></i> Add to Google Calendar
                                        </a>

                                        {/* Read the blog */}
                                        <Link
                                            to="/blog/pull-up-and-stitch"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                background: 'white',
                                                color: '#4A2C4A',
                                                border: '2px solid #4A2C4A',
                                                padding: '9px 22px',
                                                borderRadius: '50px',
                                                textDecoration: 'none',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            <i className="fas fa-newspaper"></i> Read the Blog Post
                                        </Link>

                                        {/* Fashion Circuit link */}
                                        <a
                                            href="https://thefashioncircuit.net/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: '#C5A059',
                                                textDecoration: 'none',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                borderBottom: '2px solid #C5A059',
                                                paddingBottom: '2px'
                                            }}
                                        >
                                            thefashioncircuit.net <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EVENT CARD 2 — Community Picnic */}
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            marginBottom: '30px',
                            border: '1px solid #eee'
                        }}>
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
                            <div style={{ padding: '30px', flex: 1 }}>
                                <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Annual Community Picnic</h3>
                                <p style={{ color: '#666', marginBottom: '15px' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#BCA88E' }}></i>
                                    City Park, Main Pavilion &nbsp;|&nbsp; 12:00 PM – 4:00 PM
                                </p>
                                <p style={{ color: '#555', marginBottom: '20px' }}>An afternoon of food, cultural performances, and family-friendly activities. Everyone is welcome!</p>
                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nisaa+Annual+Community+Picnic&dates=20251015T170000Z/20251015T210000Z&details=Annual+Community+Picnic+hosted+by+Nisaa+African+Family+Services.&location=City+Park+Main+Pavilion,+Des+Moines,+IA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#4A2C4A',
                                        color: 'white',
                                        padding: '9px 20px',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        fontWeight: '700',
                                        fontSize: '0.82rem'
                                    }}
                                >
                                    <i className="fas fa-calendar-plus"></i> Add to Google Calendar
                                </a>
                            </div>
                        </div>

                        {/* EVENT CARD 3 — DV Workshop */}
                        <div style={{
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
                                <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Domestic Violence Awareness Workshop</h3>
                                <p style={{ color: '#666', marginBottom: '15px' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#BCA88E' }}></i>
                                    Nisaa Center, Room B &nbsp;|&nbsp; 6:00 PM – 8:00 PM
                                </p>
                                <p style={{ color: '#555', marginBottom: '20px' }}>An educational session focused on recognizing signs of abuse and supporting survivors in our community.</p>
                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nisaa+DV+Awareness+Workshop&dates=20251102T230000Z/20251103T010000Z&details=Educational+workshop+on+recognizing+signs+of+abuse+and+supporting+survivors.&location=Nisaa+Center+Room+B,+4944+Franklin+Ave,+Des+Moines,+IA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#BCA88E',
                                        color: 'white',
                                        padding: '9px 20px',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        fontWeight: '700',
                                        fontSize: '0.82rem'
                                    }}
                                >
                                    <i className="fas fa-calendar-plus"></i> Add to Google Calendar
                                </a>
                            </div>
                        </div>

                    </motion.div>
                )}

                {/* --- TAB 3: PODCAST --- */}
                {activeTab === 'Podcast' && (
                    <motion.div
                        key="Podcast"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#BCA88E', fontWeight: '700', fontSize: '0.8rem' }}>
                                    <i className="fas fa-microphone" style={{ marginRight: '6px' }}></i> Now Listening
                                </span>
                                <h2 style={{ fontFamily: "'Cinzel', serif", color: '#4A2C4A', fontSize: '2rem', margin: '10px 0 10px' }}>
                                    Nisaa on the Air
                                </h2>
                                <p style={{ color: '#888', fontSize: '0.95rem' }}>
                                    Our leadership sharing stories, advocacy, and truth — beyond our walls.
                                </p>
                            </div>

                            {/* Episode card */}
                            <div style={{
                                background: 'white',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                border: '1px solid #f0e8d8'
                            }}>
                                {/* Episode header */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #4A2C4A 0%, #1a0a1a 100%)',
                                    padding: '30px',
                                    display: 'flex',
                                    gap: '20px',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap'
                                }}>
                                    {/* Podcast cover placeholder */}
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #6a1b9a, #4A2C4A)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    }}>
                                        <i className="fas fa-microphone-alt" style={{ color: '#C5A059', fontSize: '2rem' }}></i>
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <p style={{ color: '#C5A059', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 8px' }}>
                                            Changing Narratives Podcast · Sep 10, 2025
                                        </p>
                                        <h3 style={{ color: 'white', fontFamily: "'Cinzel', serif", fontSize: '1.2rem', margin: '0 0 8px', lineHeight: '1.4' }}>
                                            From Iowa to the Frontlines: Nisaa African Family Services Revolution Against FGC
                                        </h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', margin: 0 }}>
                                            feat. Hibo Jama & Barwaqo Aden · 44 min
                                        </p>
                                    </div>
                                </div>

                                {/* Spotify embed */}
                                <div style={{ padding: '0' }}>
                                    <iframe
                                        src="https://open.spotify.com/embed/episode/1MuNtgUcX8648742NT3gOP?utm_source=generator&theme=0"
                                        width="100%"
                                        height="152"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        title="From Iowa to the Frontlines — Changing Narratives Podcast"
                                        style={{ display: 'block' }}
                                    ></iframe>
                                </div>

                                {/* Episode description */}
                                <div style={{ padding: '28px 30px' }}>
                                    <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.97rem', marginBottom: '20px' }}>
                                        <em style={{ color: '#4A2C4A', fontWeight: '600' }}>"Change doesn't happen to communities — it happens with them."</em>
                                    </p>
                                    <p style={{ color: '#666', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '24px' }}>
                                        In this episode of Changing Narratives, host Patricia Mars sits down with <strong>Hibo Jama</strong> and <strong>Barwaqo Aden</strong> of Nisaa African Family Services — a grassroots powerhouse supporting African refugee and immigrant communities in Iowa. They speak candidly about FGC, survivor-led advocacy, and what it means to build change from the inside out.
                                    </p>

                                    {/* Tags */}
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                        {['FGC Advocacy', 'Survivor-Led', 'African Communities', 'Iowa', '44 min'].map(tag => (
                                            <span key={tag} style={{
                                                background: '#faf6f0',
                                                color: '#4A2C4A',
                                                border: '1px solid #f0e8d8',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.78rem',
                                                fontWeight: '600'
                                            }}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                                        <a
                                            href="https://open.spotify.com/episode/1MuNtgUcX8648742NT3gOP"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                background: '#1DB954',
                                                color: 'white',
                                                padding: '11px 22px',
                                                borderRadius: '50px',
                                                textDecoration: 'none',
                                                fontWeight: '700',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            <i className="fab fa-spotify"></i> Open in Spotify
                                        </a>
                                        <a
                                            href="https://f6b95ba0-b041-4229-9673-652cebdca0ae.libsyn.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: '#4A2C4A',
                                                border: '2px solid #4A2C4A',
                                                background: 'white',
                                                padding: '9px 22px',
                                                borderRadius: '50px',
                                                textDecoration: 'none',
                                                fontWeight: '700',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            <i className="fas fa-microphone"></i> Changing Narratives Podcast
                                        </a>
                                    </div>
                                </div>
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