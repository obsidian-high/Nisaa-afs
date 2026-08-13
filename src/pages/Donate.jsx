import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PAYPAL_DONATIONS_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID_DONATIONS;

const Donate = () => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const finalAmount = parseFloat(customAmount || amount || 0).toFixed(2);

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
                      <input
                        type="number"
                        className="amt-input"
                        placeholder="Other"
                        value={customAmount}
                        onChange={handleCustomChange}
                      />
                    </div>

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

                    {/* PAYPAL SDK BUTTONS */}
                    <PayPalScriptProvider options={{ 
                      clientId: PAYPAL_DONATIONS_CLIENT_ID, 
                      currency: 'USD', 
                      intent: 'capture',
                      components: 'buttons',
                      enableFunding: 'venmo,card'
                    }}>
                      <PayPalButtons
                        style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'donate' }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: { value: finalAmount },
                              description: 'Donation to Nisaa African Family Services',
                              custom_id: `DONATION-${Date.now()}`
                            }]
                          });
                        }}
                        onApprove={async (data, actions) => {
                          await actions.order.capture();
                          setShowThankYou(true);
                        }}
                        onError={(err) => {
                          console.error('PayPal donation error:', err);
                          alert('Payment failed. Please try again.');
                        }}
                      />
                    </PayPalScriptProvider>

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
