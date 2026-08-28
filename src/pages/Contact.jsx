import React, { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';

const FORMSPREE_URL = 'https://formspree.io/f/xojjqwqa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
        <section className="section-padding bg-white" style={{ paddingTop: '0px', marginTop: '-80px' }}>
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

                {/* SUCCESS MESSAGE */}
                {status === 'success' && (
                  <div style={{
                    background: '#f0f9f4',
                    border: '1px solid #8da399',
                    borderRadius: '12px',
                    padding: '25px',
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>
                    <i className="fas fa-check-circle" style={{ color: '#8da399', fontSize: '2rem', marginBottom: '10px', display: 'block' }}></i>
                    <h4 style={{ color: '#4A2C4A', marginBottom: '8px' }}>Message Sent!</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      style={{ marginTop: '15px', background: 'none', border: 'none', color: '#4A2C4A', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Send another message
                    </button>
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {status === 'error' && (
                  <div style={{
                    background: '#fff5f5',
                    border: '1px solid #e57373',
                    borderRadius: '12px',
                    padding: '15px 20px',
                    marginBottom: '20px',
                    color: '#c62828',
                    fontSize: '0.95rem'
                  }}>
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                    Something went wrong. Please try again or email us directly at Contact@nisaa-afs.org
                  </div>
                )}

                {/* FORM — hide when success */}
                {status !== 'success' && (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange}>
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
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-donate"
                      style={{ width: '100%', border: 'none', cursor: 'pointer' }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
