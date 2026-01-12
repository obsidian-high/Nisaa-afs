import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const Programs = () => {
  // State to track which tab is currently open
  const [activeTab, setActiveTab] = useState('Direct');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition> 
      
      <div className="programs-page">
          {/* HERO SECTION */}
          {/* Adjusted padding to move text UP and reduce bottom gap */}
          <header className="program-hub-hero" style={{ paddingTop: '110px', paddingBottom: '30px' }}>
              <div className="animated-bg"></div>
              <div className="container center-text relative-z">
                  <span className="sub-head">Holistic Care</span>
                  <h1>What We <br /><em>Do</em></h1>
                  <p>Explore our three pillars of support below.</p>
              </div>
          </header>

          {/* MAIN TAB SECTION */}
          {/* Reduced paddingTop to 0 to pull tabs closer to the header */}
          <section className="hub-section" style={{ paddingTop: '0' }}>
              <div className="container">
                  
                  {/* TAB CONTROLS */}
                  <div className="tab-controls" style={{ marginTop: '20px' }}>
                      <button 
                          className={`tab-btn ${activeTab === 'Direct' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('Direct')}
                      >
                          <i className="fas fa-hands-helping"></i> Direct Services
                      </button>
                      
                      <button 
                          className={`tab-btn ${activeTab === 'Outreach' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('Outreach')}
                      >
                          <i className="fas fa-bullhorn"></i> Outreach & FGM/C
                      </button>
                      
                      <button 
                          className={`tab-btn ${activeTab === 'Youth' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('Youth')}
                      >
                          <i className="fas fa-seedling"></i> Youth
                      </button>
                  </div>

                  {/* TAB 1: DIRECT SERVICES */}
                  <div id="Direct" className={`tab-content ${activeTab === 'Direct' ? 'active-content' : ''}`}>
                      <div className="content-header" style={{ marginTop: '20px', marginBottom: '10px' }} >
                          <h2>Restoring Dignity</h2>
                          <p>Comprehensive, culturally specific case management for survivors.</p>
                      </div>

                      <div className="cards-3-grid">
                          <div className="hub-card">
                              <div className="card-icon"><i className="fas fa-shield-alt"></i></div>
                              <h3>Crisis Intervention</h3>
                              <ul>
                                  <li>24/7 Crisis Advocacy</li>
                                  <li><strong>FGM/C Survivor Care</strong></li>
                                  <li>Safety Planning</li>
                                  <li>Individual Counseling</li>
                              </ul>
                          </div>
                          
                          <div className="hub-card">
                              <div className="card-icon"><i className="fas fa-balance-scale"></i></div>
                              <h3>Legal Support</h3>
                              <ul>
                                  <li>VAWA Applications</li>
                                  <li>U-Visa Assistance</li>
                                  <li>Court Accompaniment</li>
                                  <li>Immigration Support</li>
                              </ul>
                          </div>

                          <div className="hub-card">
                              <div className="card-icon"><i className="fas fa-home"></i></div>
                              <h3>Stability & Practical</h3>
                              <ul>
                                  <li>Housing Assistance</li>
                                  <li>Employment Help</li>
                                  <li>Govt. Benefit Apps</li>
                                  <li>Victim Compensation</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  {/* TAB 2: OUTREACH */}
                  <div id="Outreach" className={`tab-content ${activeTab === 'Outreach' ? 'active-content' : ''}`}>
                      <div className="content-header">
                          <h2>Community Dialogue</h2>
                          <p>Changing social norms through education and conversation.</p>
                      </div>

                      <div className="outreach-grid">
                          <div className="feature-box sage-box">
                              <h3><i className="fas fa-venus"></i> Women's Advocacy</h3>
                              <p>Celebrating International Women’s Day and hosting panel discussions to uplift African women's voices.</p>
                          </div>
                          
                          <div className="feature-box purple-box">
                              <h3><i className="fas fa-ribbon"></i> End FGM/C</h3>
                              <p>Leading state-wide efforts to educate families on the harms of Female Genital Cutting while providing sensitive support for survivors.</p>
                          </div>
                          
                          <div className="feature-box sage-box">
                              <h3><i className="fas fa-users"></i> Community Presence</h3>
                              <p>Tabling at cultural gatherings and religious centers to ensure every family knows resources are available.</p>
                          </div>
                      </div>
                  </div>

                  {/* TAB 3: YOUTH */}
                  <div id="Youth" className={`tab-content ${activeTab === 'Youth' ? 'active-content' : ''}`}>
                      <div className="split-layout">
                          <div className="text-side">
                              <h2>Next Generation</h2>
                              <p>Our youth program offers a safe harbor for children balancing African heritage with American life.</p>
                              <ul className="check-list">
                                  <li><i className="fas fa-check-circle"></i> Peer-to-Peer Support</li>
                                  <li><i className="fas fa-check-circle"></i> Youth Mentorship</li>
                                  <li><i className="fas fa-check-circle"></i> Leadership Internships</li>
                                  <li><i className="fas fa-check-circle"></i> Prevention Workshops</li>
                              </ul>
                          </div>
                          <div className="visual-side">
                              <div className="floating-circle">
                                  <span>Future<br />Leaders</span>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
      </div>

    </PageTransition> 
  );
};

export default Programs;