import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      
      <div className="contact-page">
        {/* HERO SECTION */}
        <header className="page-hero">
          <div className="container center-text">
              <span className="sub-head">Get in Touch</span>
              <h1>We are here <br /><em>for you</em></h1>
          </div>
        </header>

        {/* CONTACT FORM & INFO SECTION */}
        <section className="section-padding bg-white" style={{ paddingTop: '0px', marginTop: '-80px'}}>
          <div className="container">
              {/* This wrapper holds the Left (Info) and Right (Form) side-by-side */}
              <div className="contact-wrapper">
                  
                  {/* LEFT SIDE: INFO */}
                  <div className="contact-info-box">
                      <h3>Visit Our Office</h3>
                      <p style={{ marginBottom: '30px' }}>Our doors are open for support, questions, or simply a safe space to talk.</p>
                      
                      <div className="info-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <div>
                              <strong>Address:</strong><br />
                              4944 Franklin Avenue, Suite P<br />
                              Des Moines, IA 50310
                          </div>
                      </div>

                      <div className="info-item">
                          <i className="fas fa-phone-alt"></i>
                          <div>
                              <strong>Phone:</strong><br />
                              Office: 515-255-5430<br />
                              <span style={{ color: '#d9534f', fontWeight: 'bold' }}>Helpline: 1844-269-6203</span><br />
                              <span style={{ fontSize: '0.9em', color: '#666' }}>Fax: 515-255-4517</span>
                          </div>
                      </div>

                      <div className="info-item">
                          <i className="fas fa-envelope"></i>
                          <div>
                              <strong>Email:</strong><br />
                              Contact@nisaa-afs.org
                          </div>
                      </div>

                      {/* GOOGLE MAP - Updated with working link */}
                      <div className="map-container">
                          <iframe 
                              src="https://maps.google.com/maps?q=4944%20Franklin%20Ave%2C%20Des%20Moines%2C%20IA%2050310&t=&z=15&ie=UTF8&iwloc=&output=embed"
                              width="100%" 
                              height="250" 
                              style={{ border: 0 }} 
                              allowFullScreen="" 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Nisaa Location"
                          ></iframe>
                      </div>
                  </div>

                  {/* RIGHT SIDE: FORM */}
                  <div className="contact-form-box">
                      <h3>Send a Message</h3>
                      <form action="https://formspree.io/f/xojjqwqa" method="POST">
                          <div className="form-group">
                              <label>Name</label>
                              <input type="text" placeholder="Your Full Name" required />
                          </div>
                          <div className="form-group">
                              <label>Email</label>
                              <input type="email" placeholder="Your Email Address" required />
                          </div>
                          <div className="form-group">
                              <label>Subject</label>
                              <select defaultValue="General Inquiry">
                                  <option>General Inquiry</option>
                                  <option>Request Assistance</option>
                                  <option>Partnership Opportunity</option>
                                  <option>Media & Press</option>
                                  <option>Volunteer Opportunities</option>
                                  <option>Donation Question</option>
                                  <option>Event Collaboration</option>
                                  <option>Other</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label>Message</label>
                              <textarea rows="5" placeholder="How can we help you?"></textarea>
                          </div>
                          <button type="submit" className="btn-donate" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                              Send Message
                          </button>
                      </form>
                  </div>

              </div> {/* End contact-wrapper */}
          </div>
        </section>
      </div>

    </PageTransition>
  );
};

export default Contact;