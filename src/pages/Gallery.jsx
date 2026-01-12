import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition'; // <--- IMPORT ADDED

const Gallery = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition> {/* <--- WRAPPER STARTS HERE */}
      
      <div className="gallery-page">
        <section className="stream-section">
          
          <div className="stream-header">
              <h1>Moments</h1>
              <div className="gold-dash"></div>
          </div>

          <div className="stream-container">
              
              {/* ROW 1: Moving Left */}
              <div className="stream-row move-left">
                  <div className="track">
                      <img src="/1.jpg" alt="Gallery Moment" />
                      <img src="/2.jpg" alt="Gallery Moment" />
                      <img src="/nisaa2.jpeg" alt="Gallery Moment" />
                      <img src="/nisaa9.jpeg" alt="Gallery Moment" />
                      <img src="/12.jpg" alt="Gallery Moment" />
                      
                      <img src="/nisaa4.jpeg" alt="Gallery Moment" />
                      <img src="/nisaa group.jpeg" alt="Gallery Moment" />
                      <img src="/nisaagrp2.jpeg" alt="Gallery Moment" />
                      <img src="/14.jpg" alt="Gallery Moment" />
                      <img src="/15.jpg" alt="Gallery Moment" />
                  </div>
              </div>

              {/* ROW 2: Moving Right */}
              <div className="stream-row move-right">
                  <div className="track">
                      <div className="vid-box">
                          <video autoPlay muted loop playsInline>
                              <source src="/nisaa9.mp4" type="video/mp4" />
                          </video>
                      </div>
                      <img src="/nisaagrp4.jpeg" alt="Gallery Moment" />
                      <img src="/6.jpg" alt="Gallery Moment" />
                      <img src="/7.jpg" alt="Gallery Moment" />

                      <img src="/nisaagrp4.jpeg" alt="Gallery Moment" />
                      <img src="/9.jpg" alt="Gallery Moment" />
                      <img src="/nisaa5.jpeg" alt="Gallery Moment" />
                  </div>
              </div>

          </div>
        </section>
      </div>

    </PageTransition> /* <--- WRAPPER ENDS HERE */
  );
};

export default Gallery;