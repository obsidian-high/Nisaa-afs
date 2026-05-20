import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const Donate = () => {
  // --- CONFIGURATION ---
  const PAYPAL_EMAIL = import.meta.env.VITE_PAYPAL_EMAIL || "itsmeaidenj@gmail.com";
  const ORGANIZATION_NAME = "Obsidian";

  // State
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  // Scroll to top on load - now handled in the combined useEffect above

  // Handle Button Clicks ($25, $50, $100)
  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount(''); // Clear custom input if a button is clicked
  };

  // Handle Typing in "Other" box
  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null); // Deselect buttons if typing
  };

  // --- LOGIC TO BUILD THE PAYPAL LINK ---
  const finalAmount = customAmount ? customAmount : amount;
  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${PAYPAL_EMAIL}&item_name=Donation+to+${ORGANIZATION_NAME}&currency_code=USD&amount=${finalAmount}&custom=${encodeURIComponent(donorName)}&return=${encodeURIComponent(window.location.href + '?thankyou=1')}&cancel_return=${encodeURIComponent(window.location.href)}`;

  // Check if returning from PayPal
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.search.includes('thankyou=1')) {
      setShowThankYou(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <PageTransition> 
      <div className="donate-page">

        {/* THANK YOU OVERLAY */}
        {showThankYou && (
          <div className="thankyou-overlay">
            <div className="thankyou-card">
              <div className="thankyou-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h1>Thank You{donorName ? `, ${donorName}` : ''}!</h1>
              <p className="thankyou-sub">Your generosity means the world to us and to every family we serve.</p>
              <div className="thankyou-divider"></div>
              <p className="thankyou-body">
                Your donation to Nisaa African Family Services is more than a gift — it is a lifeline. 
                Because of people like you, survivors find safety, families heal, and children grow up 
                knowing they are protected and loved.
              </p>
              <p className="thankyou-body">
                Every dollar you've given today will go directly toward emergency shelter, legal aid, 
                and culturally specific counseling for those who need it most. You are part of this community 
                of healing, and we are deeply grateful.
              </p>
              {donorMessage && (
                <div className="thankyou-message-echo">
                  <i className="fas fa-quote-left"></i>
                  <p>"{donorMessage}"</p>
                </div>
              )}
              <p className="thankyou-sign">With gratitude,<br /><strong>The Nisaa Family</strong></p>
              <button className="thankyou-close" onClick={() => setShowThankYou(false)}>
                Continue to Site
              </button>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <header className="donate-hero">
            <div className="container">
                <span className="heart-icon"><i className="fas fa-heart"></i></span>
                <h1>Be the <br /><em>Change</em></h1>
                <p>Your generosity restores dignity and heals families.</p>
            </div>
        </header>

        {/* MAIN DONATION GRID */}
        <section className="section-padding bg-cream">
            <div className="container">
                
                <div className="donate-grid">
                    
                    {/* LEFT COLUMN: IMPACT */}
                    <div className="impact-column">
                        <h2>Where Your Money Goes</h2>
                        <p className="impact-intro">Nisaa is a non-profit organization. Every dollar you give goes directly to supporting survivors of domestic violence and sexual assault in our community.</p>
                        
                        <div className="impact-card">
                            <div className="icon-box"><i className="fas fa-home"></i></div>
                            <div className="text-box">
                                <h4>$50 Provide Safety</h4>
                                <p>Covers emergency transportation and one night of safe shelter for a mother and child.</p>
                            </div>
                        </div>

                        <div className="impact-card">
                            <div className="icon-box"><i className="fas fa-balance-scale"></i></div>
                            <div className="text-box">
                                <h4>$100 Legal Aid</h4>
                                <p>Helps a survivor navigate the court system to secure protection orders.</p>
                            </div>
                        </div>

                        <div className="impact-card">
                            <div className="icon-box"><i className="fas fa-hands-helping"></i></div>
                            <div className="text-box">
                                <h4>$250 Healing Therapy</h4>
                                <p>Funds a month of culturally specific counseling sessions for a family.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: WIDGET */}
                    <div className="payment-column">
                        <div className="donation-widget">
                            <div className="widget-header">
                                <h3>Make a Donation</h3>
                                <p>Secure payment via PayPal</p>
                            </div>
                            
                            <div className="widget-body">
                                <p className="label-text">Select Amount</p>
                                
                                {/* THE GRID */}
                                <div className="amount-grid">
                                    <button 
                                      className={`amt-btn ${amount === 25 ? 'active' : ''}`} 
                                      onClick={() => handleAmountClick(25)}
                                    >
                                      $25
                                    </button>
                                    <button 
                                      className={`amt-btn ${amount === 50 ? 'active' : ''}`} 
                                      onClick={() => handleAmountClick(50)}
                                    >
                                      $50
                                    </button>
                                    <button 
                                      className={`amt-btn ${amount === 100 ? 'active' : ''}`} 
                                      onClick={() => handleAmountClick(100)}
                                    >
                                      $100
                                    </button>
                                    
                                    {/* THE AMOUNT INPUT */}
                                    <input 
                                      type="number" 
                                      className="amt-input" 
                                      placeholder="Other" 
                                      value={customAmount}
                                      onChange={handleCustomChange}
                                    />
                                </div>

                                {/* --- NEW: DONOR NAME INPUT --- */}
                                <div style={{ marginBottom: '20px', marginTop: '5px' }}>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name (Optional)"
                                        value={donorName}
                                        onChange={(e) => setDonorName(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            fontSize: '1rem',
                                            backgroundColor: '#fdfdfd',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                {/* MESSAGE INPUT */}
                                <div style={{ marginBottom: '20px' }}>
                                    <textarea
                                        placeholder="Leave a message of support (optional)"
                                        value={donorMessage}
                                        onChange={(e) => setDonorMessage(e.target.value)}
                                        rows="3"
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            fontSize: '0.95rem',
                                            backgroundColor: '#fdfdfd',
                                            outline: 'none',
                                            resize: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>

                                {/* THE DYNAMIC LINK */}
                                <a 
                                  href={paypalUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="paypal-main-btn"
                                >
                                    <i className="fab fa-paypal"></i> Donate with PayPal
                                </a>

                                <div className="secure-badge">
                                    <i className="fas fa-lock"></i> 100% Secure Transaction
                                </div>
                            </div>
                        </div>
                        
                        <div className="mini-testimony">
                            "Nisaa saved my life when I had nowhere else to turn."
                            <br /><span>- A Survivor</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-padding bg-white">
            <div className="container center-text" style={{ maxWidth: '700px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Frequently Asked Questions</h2>
                
                <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <h4 style={{ color: '#4A2C4A' }}>Is my donation tax-deductible?</h4>
                    <p style={{ color: '#666' }}>Yes. Nisaa is a registered 501(c)(3) non-profit. You will receive a receipt for tax purposes.</p>
                </div>

                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ color: '#4A2C4A' }}>Can I donate by check?</h4>
                    <p style={{ color: '#666' }}>Absolutely. Please mail checks to: 4944 Franklin Ave, Des Moines, IA.</p>
                </div>
            </div>
        </section>
      </div>

    </PageTransition> 
  );
};

export default Donate;