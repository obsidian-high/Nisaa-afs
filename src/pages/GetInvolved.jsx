import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const FORMSPREE_URL = 'https://formspree.io/f/xojjqwqa';

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: 'General Volunteering',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Volunteer Application — ${form.interest}`,
          message: form.message
        })
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', interest: 'General Volunteering', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageTransition>
      <div className="volunteer-page">
        
        {/* HERO SECTION */}
        <header className="page-hero" style={{ paddingBottom: '60px', paddingTop: '100px' }}>
          <div className="container center-text">
            <span className="sub-head">Join the Movement</span>
            <h1>Lend a <br /><em>Hand</em></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
              Our work is powered by the passion of our community. 
              Whether you have an hour a month or ten hours a week, you can make an impact.
            </p>
          </div>
        </header>

        {/* OPEN ROLES SECTION */}
        <section className="section-padding bg-cream" style={{ paddingTop: '0' }}>
          <div className="container">
            
            <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
                <h2 style={{ color: '#4A2C4A' }}>Current Opportunities</h2>
            </div>

            <div className="roles-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
            }}>
                
                {/* ROLE 1: YOUTH MENTOR */}
                <div className="role-card" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ color: '#BCA88E', fontSize: '2rem', marginBottom: '15px' }}>
                        <i className="fas fa-seedling"></i>
                    </div>
                    <h3>Youth Mentor</h3>
                    <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
                        Work directly with high school students to help them navigate bicultural identity and college prep.
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
                        <li>4-6 hours / month</li>
                        <li>Background check required</li>
                        <li>Weekends or evenings</li>
                    </ul>
                </div>

                {/* ROLE 2: CRISIS ADVOCATE */}
                <div className="role-card" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ color: '#4A2C4A', fontSize: '2rem', marginBottom: '15px' }}>
                        <i className="fas fa-phone-volume"></i>
                    </div>
                    <h3>Crisis Line Advocate</h3>
                    <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
                        Provide compassionate listening and resource referrals to callers on our confidential helpline.
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
                        <li>Remote opportunity</li>
                        <li>40-hour training provided</li>
                        <li>Flexible shifts</li>
                    </ul>
                </div>

                {/* ROLE 3: EVENT STAFF */}
                <div className="role-card" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ color: '#BCA88E', fontSize: '2rem', marginBottom: '15px' }}>
                        <i className="fas fa-clipboard-check"></i>
                    </div>
                    <h3>Event Staff</h3>
                    <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
                        Help us run community picnics, galas, and workshops. Great for those with limited time.
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
                        <li>As needed (Ad-hoc)</li>
                        <li>Setup & teardown help</li>
                        <li>Guest registration</li>
                    </ul>
                </div>
            </div>

            {/* APPLICATION FORM */}
            <div className="volunteer-form-container" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ backgroundColor: '#4A2C4A', color: 'white', padding: '40px', borderRadius: '24px 24px 0 0', textAlign: 'center' }}>
                    <h2 style={{ margin: 0 }}>Apply to Volunteer</h2>
                    <p style={{ opacity: 0.9, marginTop: '10px' }}>Join the Nisaa family today.</p>
                </div>
                
                <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '0 0 24px 24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>

                    {/* SUCCESS */}
                    {status === 'success' && (
                      <div style={{ background: '#f0f9f4', border: '1px solid #8da399', borderRadius: '12px', padding: '30px', textAlign: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#8da399', fontSize: '2.5rem', marginBottom: '12px', display: 'block' }}></i>
                        <h4 style={{ color: '#4A2C4A', marginBottom: '8px' }}>Application Received!</h4>
                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '16px' }}>
                          Thank you, {form.name || 'friend'}! We'll be in touch shortly about your interest in {form.interest}.
                        </p>
                        <button onClick={() => setStatus('idle')} style={{ background: 'none', border: 'none', color: '#4A2C4A', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}>
                          Submit another application
                        </button>
                      </div>
                    )}

                    {/* ERROR */}
                    {status === 'error' && (
                      <div style={{ background: '#fff5f5', border: '1px solid #e57373', borderRadius: '12px', padding: '15px 20px', marginBottom: '20px', color: '#c62828', fontSize: '0.95rem' }}>
                        <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                        Something went wrong. Please try again or email us at Contact@nisaa-afs.org
                      </div>
                    )}

                    {/* FORM */}
                    {status !== 'success' && (
                    <form onSubmit={handleSubmit}>
                        
                        {/* NAME & EMAIL ROW */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem', color: '#666' }}>Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem', color: '#666' }}>Email</label>
                                <input 
                                    type="email" 
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({...form, email: e.target.value})}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                        </div>

                        {/* INTEREST DROPDOWN */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem', color: '#666' }}>I am interested in...</label>
                            <select 
                                value={form.interest}
                                onChange={(e) => setForm({...form, interest: e.target.value})}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white' }}
                            >
                                <option>General Volunteering</option>
                                <option>Youth Mentorship</option>
                                <option>Crisis Line Advocacy</option>
                                <option>Event Planning</option>
                                <option>Administrative Help</option>
                            </select>
                        </div>

                        {/* MESSAGE */}
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem', color: '#666' }}>Why do you want to join us?</label>
                            <textarea 
                                rows="4"
                                value={form.message}
                                onChange={(e) => setForm({...form, message: e.target.value})}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            style={{ 
                                width: '100%', 
                                padding: '15px', 
                                backgroundColor: '#BCA88E', 
                                color: 'white', 
                                fontWeight: 'bold', 
                                fontSize: '1.1rem', 
                                border: 'none', 
                                borderRadius: '12px', 
                                cursor: 'pointer' 
                            }}
                        >
                            {status === 'sending' ? 'Submitting...' : 'Submit Application'}
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

export default GetInvolved;