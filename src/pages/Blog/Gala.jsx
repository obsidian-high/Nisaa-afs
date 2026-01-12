import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const Gala = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <article className="single-post-page" style={{ fontFamily: '"Playfair Display", serif' }}>
        
        {/* HERO SECTION WITH IMAGE BACKGROUND */}
        <div className="post-hero" style={{ 
            height: '60vh', 
            minHeight: '400px',
            // Replace with your actual gala image path
            backgroundImage: 'url("/1.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            {/* Dark Overlay for text readability */}
            <div className="overlay" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(74, 44, 74, 0.3), rgba(74, 44, 74, 0.9))'
            }}></div>

            <div className="container" style={{ 
                position: 'relative', 
                zIndex: 2, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-end',
                paddingBottom: '60px',
                color: 'white',
                maxWidth: '1200px',
                margin: '0 auto',
                paddingLeft: '20px',
                paddingRight: '20px'
            }}>
                {/* Back Button */}
                <Link to="/blog" style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    textDecoration: 'none', 
                    marginBottom: '20px', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>

                {/* Category Tag */}
                <span style={{ 
                    backgroundColor: '#BCA88E', // Gold
                    color: 'white', 
                    padding: '6px 15px', 
                    borderRadius: '50px', 
                    fontSize: '0.85rem', 
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Community Event
                </span>

                {/* Title */}
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                    maxWidth: '900px', 
                    lineHeight: '1.1',
                    marginBottom: '20px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    1st Fundraising Gala: <br />
                    <span style={{ fontStyle: 'italic' }}>A Night to Remember</span>
                </h1>

                {/* Metadata */}
                <div style={{ marginTop: '10px', fontSize: '1.1rem', opacity: 0.9, fontFamily: 'sans-serif' }}>
                    <span>October 19, 2019</span> <span style={{ margin: '0 10px' }}>|</span> <span>By Nisaa Team</span>
                </div>
            </div>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="section-padding" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                
                {/* Lead Paragraph */}
                <p className="lead-text" style={{ 
                    fontSize: '1.4rem', 
                    lineHeight: '1.8', 
                    color: '#4A2C4A', // Obsidian
                    fontWeight: '500', 
                    marginBottom: '40px' 
                }}>
                    It was a historic milestone for our community. On a crisp October evening, over 200 supporters, community leaders, and families gathered to celebrate Nisaa’s very first fundraising gala.
                </p>

                {/* Main Body */}
                <div className="content-body" style={{ color: '#444', fontSize: '1.15rem', lineHeight: '1.9', fontFamily: 'sans-serif' }}>
                    <p style={{ marginBottom: '30px' }}>
                        The atmosphere was electric with hope and solidarity. The theme of the night, "Restoring Dignity," resonated in every speech and performance. We were honored to host keynote speakers who shared powerful stories of resilience and the critical need for culturally specific support services for African immigrants in Iowa.
                    </p>

                    <h3 style={{ color: '#4A2C4A', margin: '50px 0 20px', fontSize: '1.8rem', fontFamily: '"Playfair Display", serif' }}>Why This Matters</h3>
                    <p style={{ marginBottom: '30px' }}>
                        For many years, survivors of domestic violence in our community faced a double burden: the trauma of abuse and the isolation of navigating a system that didn't understand their language or culture. This gala wasn't just about raising funds; it was about raising our voices. It was a declaration that <strong>we are here</strong>, and we will take care of our own.
                    </p>

                    {/* Blockquote */}
                    <blockquote style={{ 
                        borderLeft: '4px solid #BCA88E', // Gold border
                        paddingLeft: '30px', 
                        margin: '50px 0', 
                        fontStyle: 'italic',
                        color: '#666',
                        fontSize: '1.4rem',
                        lineHeight: '1.6',
                        fontFamily: '"Playfair Display", serif'
                    }}>
                        "Tonight is proof that when we come together, we can build a safety net that catches everyone. No woman should have to choose between her culture and her safety."
                    </blockquote>

                    <h3 style={{ color: '#4A2C4A', margin: '50px 0 20px', fontSize: '1.8rem', fontFamily: '"Playfair Display", serif' }}>Looking Ahead</h3>
                    <p style={{ marginBottom: '30px' }}>
                        Thanks to the incredible generosity of our donors, we exceeded our fundraising goal for the night. These funds will go directly toward:
                    </p>
                    <ul style={{ marginBottom: '40px', paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-check-circle" style={{ color: '#BCA88E' }}></i> Expanding our 24/7 crisis helpline.
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-check-circle" style={{ color: '#BCA88E' }}></i> Hiring a new part-time legal advocate.
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-check-circle" style={{ color: '#BCA88E' }}></i> Launching our youth mentorship pilot program.
                        </li>
                    </ul>

                    <p>
                        We are deeply grateful to everyone who attended, donated, and volunteered. This is just the beginning.
                    </p>
                </div>

                <hr style={{ margin: '60px 0', border: 'none', borderTop: '1px solid #eee' }} />

                {/* FOOTER NAVIGATION */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/blog" style={{ 
                        textDecoration: 'none', 
                        color: 'white', 
                        backgroundColor: '#4A2C4A',
                        padding: '15px 40px',
                        borderRadius: '50px',
                        fontWeight: 'bold', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#331d33'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#4A2C4A'}
                    >
                        <i className="fas fa-th-large"></i> See All News
                    </Link>
                </div>

            </div>
        </section>

      </article>
    </PageTransition>
  );
};

export default Gala;