import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  // --- CAROUSEL LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I was afraid no one would understand my situation because of my culture. Nisaa didn't just understand—they stood by me through the whole legal process. They gave me my voice back.",
      name: "Fatima",
      role: "Survivor",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "The Youth Mentorship program changed my daughter's outlook. She found mentors who look like her and now she wants to become a community advocate herself.",
      name: "Ahmed",
      role: "Parent & Community Member",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "Nisaa is an invaluable partner. Their culturally specific approach is crucial for bridging the gap between immigrant communities and mainstream services.",
      name: "Dr. Sarah Johnson",
      role: "Partner Organization",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
    <PageTransition> 
      <div className="home-page"> {/* Main Container */}
        
        {/* Internal Style for the "Falling" Animation */}
        <style>
          {`
            @keyframes fallDown {
              0% { opacity: 0; transform: translateY(-40px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .fall-animate {
              opacity: 0; /* Start hidden */
              animation: fallDown 0.8s ease-out forwards;
            }
          `}
        </style>

        {/* Background Blobs */}
        <div className="blob blob-purple"></div>
        <div className="blob blob-sage"></div>

        {/* HERO SECTION */}
        <header className="hero-ethereal">
          <div className="watermark-text">NISAA</div>
          <div className="arch-container mouse-move">
              <div className="arch-frame">
                  <img 
                    src="/kingsley-hemans-5sXSPeAxd-E-unsplash.jpg" 
                    alt="Woman smiling" 
                    className="hero-img" 
                  />
                  <div className="shine-effect"></div>
              </div>
              <div className="floating-badge"><span>Est. 2014</span></div>

              {/* Floating cards ON the image - mobile only */}
              <div className="arch-card arch-card-top float-slow">
                  <div className="icon">♥</div>
                  <h3>Advocacy</h3>
                  <p>Culturally specific support.</p>
              </div>
              <div className="arch-card arch-card-bottom float-fast">
                  <div className="icon">☀</div>
                  <h3>Hope</h3>
                  <p>Building safer futures.</p>
              </div>
          </div>

          <div className="content-right fade-in desktop-only-cards">
              <div className="ice-card float-slow">
                  <div className="icon">♥</div>
                  <h3>Advocacy</h3>
                  <p>Culturally specific support.</p>
              </div>
              <div className="ice-card float-fast">
                  <div className="icon">☀</div>
                  <h3>Hope</h3>
                  <p>Building safer futures.</p>
              </div>
          </div>

          {/* ADDED marginTop HERE TO PUSH CONTENT DOWN */}
          <div className="content-left" style={{ marginTop: '90px' }}>
              
              {/* ANIMATION 1: TITLE (Immediate) */}
              <h1 className="reveal-text fall-animate" style={{ animationDelay: '0.1s' }}>
                  Restoring <br /><em>Dignity</em>
              </h1>
              
              {/* ANIMATION 2: SUBTITLE (Slight Delay) */}
              <p className="fall-animate" style={{ animationDelay: '0.3s' }}>
                  Providing a cultural sanctuary for African immigrants and refugees facing domestic violence.
              </p>
              
              {/* ANIMATION 3: BUTTONS (Last) */}
              <div className="fall-animate" style={{ display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap', animationDelay: '0.5s' }}>
                  
                  {/* BUTTON 1: GET INVOLVED */}
                  <Link to="/get-involved" 
                      style={{ 
                          backgroundColor: '#BCA88E', // Gold
                          color: 'white', 
                          padding: '14px 28px', 
                          borderRadius: '50px', 
                          textDecoration: 'none', 
                          fontWeight: 'bold',
                          boxShadow: '0 10px 20px rgba(188, 168, 142, 0.3)',
                          transition: 'all 0.3s ease',
                          border: '2px solid #BCA88E',
                          display: 'inline-block'
                      }}
                      onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.backgroundColor = '#a38f75'; 
                          e.currentTarget.style.borderColor = '#a38f75';
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.backgroundColor = '#BCA88E';
                          e.currentTarget.style.borderColor = '#BCA88E';
                      }}
                  >
                      Get Involved
                  </Link>

                  {/* BUTTON 2: DONATE */}
                  <Link to="/donate" 
                      style={{ 
                          backgroundColor: 'transparent',
                          border: '2px solid #4A2C4A', // Obsidian Border
                          color: '#4A2C4A', 
                          padding: '12px 28px', 
                          borderRadius: '50px', 
                          textDecoration: 'none', 
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease',
                          display: 'inline-block'
                      }}
                      onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#4A2C4A'; 
                          e.currentTarget.style.color = 'white'; 
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'; 
                          e.currentTarget.style.color = '#4A2C4A'; 
                      }}
                  >
                      Donate
                  </Link>
              </div>
          </div>

        </header>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding">
          <div className="container director-layout">
              <div className="dir-image-wrapper fade-up">
                  <img 
                    src="/AC9069E5-DBF8-43B9-A4D0-FF75FFF3DA1D_1_201_a.jpeg" 
                    alt="Director Portrait" 
                  />
                  <div className="decor-box"></div>
              </div>
              <div className="dir-content fade-up delay-1">
                  <span className="sub-head">About Us</span>
                  <h2>"A Future Without Fear"</h2>
                  <p>Nisaa is more than an organization; it is a promise. A promise that no woman has to choose between her culture and her safety.</p>
                  <p>We built this space to ensure that African families have a voice, a refuge, and a path to healing.</p>
                  <div className="signature">
                      <p className="sign-font">Hibo Jama</p>
                      <span className="role">Executive Director</span>
                  </div>
              </div>
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section id="programs" className="section-padding bg-white">
          <div className="container">
              <div className="grid-header center">
                  <span className="sub-head">What We Do</span>
                  <h2>Our Programs</h2>
              </div>
              
              <div className="card-grid">
                  <div className="info-card fade-up">
                      <div className="card-icon"><i className="fas fa-hands-helping"></i></div>
                      <h3>Crisis Support</h3>
                      <p>Immediate, culturally relevant intervention for survivors of domestic violence including safety planning and shelter access.</p>
                  </div>

                  <div className="info-card main-card fade-up delay-1">
                      <div className="card-icon"><i className="fas fa-bullseye"></i></div>
                      <h3>Community Education</h3>
                      <p>Workshops and outreach designed to change social norms, prevent violence, and build healthier family dynamics.</p>
                  </div>

                  <div className="info-card fade-up delay-2">
                      <div className="card-icon"><i className="fas fa-child"></i></div>
                      <h3>Youth Mentorship</h3>
                      <p>Empowering the next generation of African leaders through guidance, support, and cultural connection.</p>
                  </div>
              </div>
          </div>
        </section>

        {/* STORIES / TESTIMONIALS SECTION */}
        <section id="stories" className="section-padding">
          <div className="container">
              <div className="story-layout">
                  <div className="story-text fade-in">
                      <span className="sub-head">Testimonials</span>
                      <h2>Community Voices</h2>
                      <p>Real stories from the individuals and families whose lives have been transformed by Nisaa's support.</p>
                      <div className="carousel-controls">
                          <button onClick={prevSlide} className="control-btn">←</button>
                          <button onClick={nextSlide} className="control-btn">→</button>
                      </div>
                  </div>
                  
                  <div className="testimonial-carousel-container fade-in delay-1">
                      <div className="story-card testimonial-slide active">
                          <div className="quote-icon">“</div>
                          <p className="quote-text">{testimonials[currentSlide].quote}</p>
                          <div className="story-author">
                              <img src={testimonials[currentSlide].img} alt={testimonials[currentSlide].name} />
                              <div>
                                  <strong>{testimonials[currentSlide].name}</strong>
                                  <span>{testimonials[currentSlide].role}</span>
                              </div>
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

export default Home;