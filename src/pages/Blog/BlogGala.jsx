import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition'; // <--- IMPORT ADDED

const BlogGala = () => {
  // --- SCROLL TO TOP ON LOAD ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition> {/* <--- WRAPPER STARTS HERE */}
      
      <div className="blog-post-page">
        {/* HERO SECTION */}
        <header className="gala-hero">
            <div className="container">
                <span>October 19, 2019</span>
                <h1>The Inaugural <br /><em>Fundraising Gala</em></h1>
                <div className="gold-divider"></div>
                <p style={{ opacity: 0.9 }}>Building Bridges to Safety</p>
            </div>
        </header>

        {/* ARTICLE CONTENT */}
        <section className="gala-content-section">
            <div className="container gala-container">
                
                <p className="gala-intro">
                    "On this historic night, over 200 community members gathered to break the silence and stand united against domestic violence."
                </p>

                <div className="magazine-layout">
                    <div className="story-column">
                        <p><span className="drop-cap">I</span>t was an evening of firsts. The first time we filled a hall with such diverse supporters. The first time many survivors felt safe enough to share their stories publicly. And the first step toward the Nisaa we know today.</p>
                        <p>The energy in the room was palpable — a mix of celebration, culture, and deep determination. Elders, advocates, and allies gathered under one roof, united by a single conviction: that silence is not safety.</p>
                        
                        <div className="pull-quote">"We laid the foundation for a future free of fear."</div>
                        
                        <p>The evening featured powerful testimonials from survivors, performances rooted in African heritage, and a call to action that moved the entire room to its feet. For many attendees, it was the first time they had seen their community speak openly about domestic violence.</p>
                        <p>Proceeds from this night launched our <strong>Youth Prevention Program</strong>, ensuring the next generation has the tools to build healthy relationships — before harm ever begins.</p>
                    </div>

                    <div className="sidebar-column">
                        <div className="stat-card" style={{ borderTopColor: 'var(--gala-gold)' }}>
                            <h4>Event Snapshot</h4>
                            <div className="gala-stat-row"><i className="fas fa-map-marker-alt" style={{ color: 'var(--gala-gold)' }}></i> Des Moines, IA</div>
                            <div className="gala-stat-row"><i className="fas fa-calendar-day" style={{ color: 'var(--gala-gold)' }}></i> Oct 19, 2019</div>
                            <div className="gala-stat-row"><i className="fas fa-heart" style={{ color: 'var(--gala-gold)' }}></i> Sold Out</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gala-gallery-section">
            <div className="container">
                <h2>Captured Moments</h2>
                <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '40px' }}>A look back at the faces of resilience.</p>

                <div className="gallery-mosaic">
                    <div className="gallery-item"><img src="/1.jpg" alt="Gala moment 1" /></div>
                    <div className="gallery-item wide"><img src="/2.jpg" alt="Gala moment 2" /></div>
                    <div className="gallery-item"><img src="/3.jpg" alt="Gala moment 3" /></div>
                    <div className="gallery-item tall"><img src="/4.jpg" alt="Gala moment 4" /></div>
                    <div className="gallery-item"><img src="/5.jpg" alt="Gala moment 5" /></div>
                    <div className="gallery-item big"><img src="/6.jpg" alt="Gala moment 6" /></div>
                    <div className="gallery-item"><img src="/7.jpg" alt="Gala moment 7" /></div>
                    <div className="gallery-item wide"><img src="/8.jpg" alt="Gala moment 8" /></div>
                    <div className="gallery-item"><img src="/9.jpg" alt="Gala moment 9" /></div>
                    <div className="gallery-item tall"><img src="/10.jpg" alt="Gala moment 10" /></div>
                    <div className="gallery-item"><img src="/12.jpg" alt="Gala moment 12" /></div>
                    <div className="gallery-item"><img src="/13.jpg" alt="Gala moment 13" /></div>
                    <div className="gallery-item wide"><img src="/14.jpg" alt="Gala moment 14" /></div>
                    <div className="gallery-item"><img src="/15.jpg" alt="Gala moment 15" /></div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/blog" className="btn-donate" style={{ background: 'rgb(15, 15, 15)', color: 'var(--deep-purple)' }}>
                        Back to News
                    </Link>
                </div>
            </div>
        </section>
      </div>

    </PageTransition> /* <--- WRAPPER ENDS HERE */
  );
};

export default BlogGala;