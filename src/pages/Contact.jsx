import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition'; // <--- IMPORT ADDED

const Contact = () => {
  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    window.scrollTo(0, 0); // Start at top of page
  }, []);

  return (
    <PageTransition> {/* <--- WRAPPER STARTS HERE */}
      
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
              <div className="contact-wrapper">
                  
                  {/* LEFT SIDE: INFO */}
                  <div className="contact-info-box">
                      <h3>Visit Our Office</h3>
                      <p style={{ marginBottom: '30px' }}>Our doors are open for support, questions, or simply a safe space to talk.</p>
                      
                      <div className="info-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <div>
                              <strong>Address:</strong><br />
                              4944 Franklin Ave, Des Moines, IA
                          </div>
                      </div>

                      <div className="info-item">
                          <i className="fas fa-phone-alt"></i>
                          <div>
                              <strong>Phone:</strong><br />
                              319-338-7617
                          </div>
                      </div>

                      <div className="info-item">
                          <i className="fas fa-envelope"></i>
                          <div>
                              <strong>Email:</strong><br />
                              info@nisaa-afs.org
                          </div>
                      </div>

                      {/* GOOGLE MAP */}
                      <div className="map-container">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.834465839063!2d-93.68261892348126!3d41.60207438012626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9eb3687529a3%3A0xc0236441416e0538!2s4944%20Franklin%20Ave%2C%20Des%20Moines%2C%20IA%2050310!5e0!3m2!1sen!2sus!4v1709668000000!5m2!1sen!2sus" 
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
                      <form action="#" method="POST">
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
                                  <option>Volunteer Opportunities</option>
                                  <option>Donation Question</option>
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

              </div>
          </div>
        </section>
      </div>

    </PageTransition> /* <--- WRAPPER ENDS HERE */
  );
};

export default Contact;