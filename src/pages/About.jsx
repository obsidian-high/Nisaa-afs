import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition'; // <--- IMPORT ADDED

const About = () => {
  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.fade-in, .fade-up');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <PageTransition> {/* <--- WRAPPER STARTS HERE */}
      
      <div className="about-page">
        {/* Background Blobs */}
        <div className="blob blob-purple"></div>
        <div className="blob blob-sage"></div>

        {/* PAGE HERO */}
        <header className="page-hero">
            <div className="container center-text">
                <span className="sub-head">Our Foundation</span>
                <h1>Rooted in <br /><em>Resilience</em></h1>
                <p>From a small outreach initiative to a pillar of the African community in Iowa.</p>
            </div>
        </header>

        {/* MAIN STORY SECTION */}
        <section className="section-padding">
            <div className="container split-layout">
                <div className="image-block fade-up">
                    <img src="/nisaagrp2.jpeg" alt="Community Gathering" />
                    <div className="image-frame"></div>
                </div>
                <div className="text-block fade-up delay-1">
                    <span className="sub-head">The Context</span>
                    <h2>Africans in Iowa</h2>
                    <p>Most of Iowa’s African newcomers are refugees—people who can no longer live in their home countries. While Africa holds one-fifth of the world’s population, it accounts for more than half of the world’s refugees.</p>
                    <p>Coming to a new place like Iowa presents challenges: the shock of the first cold winter, cultural differences, language barriers, and the complexities of navigating race in predominantly white communities.</p>
                    <p><strong>But there is hope.</strong> Most come to Iowa to start over, creating new lives for themselves and their children.</p>
                </div>
            </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="center fade-in">
                    <span className="sub-head">History</span>
                    <h2>Our Story</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item fade-up">
                        <div className="timeline-date">2009</div>
                        <div className="timeline-content">
                            <h3>The Beginning</h3>
                            <p>Hibo Jama (Somali descent) was hired as a consultant for the Iowa Coalition Against Sexual Assault (IowaCASA). With support from Monsoon, she began organizing outreach events in African refugee communities.</p>
                        </div>
                    </div>

                    <div className="timeline-item fade-up delay-1">
                        <div className="timeline-date">2011</div>
                        <div className="timeline-content">
                            <h3>Formation</h3>
                            <p>Recognizing the need for culturally specific services, Monsoon helped formally establish Nisaa. Ms. Jama was hired as a part-time advocate to serve survivors in Des Moines.</p>
                        </div>
                    </div>

                    <div className="timeline-item fade-up delay-1">
                        <div className="timeline-date">2012</div>
                        <div className="timeline-content">
                            <h3>Expansion</h3>
                            <p>Funding from CVAD allowed Ms. Jama to become Project Director. An advocate from the Sudanese refugee community joined the team, expanding our linguistic reach.</p>
                        </div>
                    </div>

                    <div className="timeline-item fade-up delay-1">
                        <div className="timeline-date">2015</div>
                        <div className="timeline-content">
                            <h3>Independence</h3>
                            <p>Nisaa obtained its official non-profit status. We firmly believe that a program led by Africans is the most effective way to tackle gender-based violence in our communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BOARD OF DIRECTORS */}
        <section className="section-padding">
            <div className="container">
                <div className="center fade-in">
                    <span className="sub-head">Governance</span>
                    <h2>Board of Directors</h2>
                    <p>The Steering Committee guiding our mission.</p>
                </div>

                <div className="board-grid">
                    <div className="board-card fade-up">
                        <div className="board-icon">A</div>
                        <div><h4>Amal Barre</h4><span className="board-role">Steering Committee</span></div>
                    </div>
                    <div className="board-card fade-up delay-1">
                        <div className="board-icon">N</div>
                        <div><h4>Naomi Uweru</h4><span className="board-role">Steering Committee</span></div>
                    </div>
                    <div className="board-card fade-up delay-1">
                        <div className="board-icon">M</div>
                        <div><h4>Meredith Bell</h4><span className="board-role">Steering Committee</span></div>
                    </div>
                    <div className="board-card fade-up delay-1">
                        <div className="board-icon">K</div>
                        <div><h4>Kouthar Ayatt</h4><span className="board-role">Steering Committee</span></div>
                    </div>
                    <div className="board-card fade-up delay-1">
                        <div className="board-icon">A</div>
                        <div><h4>Anne Cherop</h4><span className="board-role">Steering Committee</span></div>
                    </div>
                </div>
            </div>
        </section>

        {/* STAFF TEAM */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="center fade-in">
                    <span className="sub-head">The Team</span>
                    <h2>Our Staff</h2>
                    <p>The dedicated individuals working daily to support our community.</p>
                </div>

                <div className="team-grid">
                    <div className="team-card fade-up">
                        <div className="avatar-placeholder purple-bg">HJ</div>
                        <div className="team-info">
                            <h3>Hibo Jama</h3>
                            <span className="role">Executive Director</span>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder sage-bg">BA</div>
                        <div className="team-info">
                            <h3>Barwaqo Aden</h3>
                            <span className="role">Assistant Director</span>
                            <p>Des Moines</p>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder purple-bg">GK</div>
                        <div className="team-info">
                            <h3>Gatete Pauline Karamera</h3>
                            <span className="role">Multilingual Advocate</span>
                            <p>Des Moines</p>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder sage-bg">HN</div>
                        <div className="team-info">
                            <h3>Honorine Ndinimana</h3>
                            <span className="role">Direct Services Coordinator</span>
                            <p>Des Moines</p>
                        </div>
                    </div>

                     <div className="team-card fade-up">
                        <div className="avatar-placeholder purple-bg">FJ</div>
                        <div className="team-info">
                            <h3>Farhan Jorgensen</h3>
                            <span className="role">Housing Advocate</span>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder sage-bg">PI</div>
                        <div className="team-info">
                            <h3>Prisca Ingabire</h3>
                            <span className="role">Financial Coordinator</span>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder purple-bg">WG</div>
                        <div className="team-info">
                            <h3>Wangui Gathua</h3>
                            <span className="role">Multilingual Advocate</span>
                            <p>Iowa City</p>
                        </div>
                    </div>

                    <div className="team-card fade-up">
                        <div className="avatar-placeholder sage-bg">EE</div>
                        <div className="team-info">
                            <h3>Eiman Elmansori</h3>
                            <span className="role">Multilingual Advocate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>

    </PageTransition> /* <--- WRAPPER ENDS HERE */
  );
};

export default About;