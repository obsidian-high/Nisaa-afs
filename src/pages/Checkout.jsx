import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../config/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import PageTransition from '../components/PageTransition';

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [savedOrderId, setSavedOrderId] = useState(null);
  const [lastSubmit, setLastSubmit] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '',
    address: '', city: '', state: '', zipCode: '',
    notes: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const getItemTotal = (item) => {
    const price = parseFloat(String(item.price).replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  // Shipping: $5 base + $1 per extra quantity per unique item
  const shipping = cart.reduce((sum, item) => sum + (4 + item.quantity), 0);
  const total = (getCartTotal() + shipping).toFixed(2);

  const generateOrderCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'NSA-';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const sanitize = (str) => String(str).trim().slice(0, 500);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Date.now() - lastSubmit < 10000) {
      alert('Please wait a moment before trying again.');
      return;
    }
    setLastSubmit(Date.now());
    setLoading(true);
    try {
      const orderData = {
        order_code: generateOrderCode(),
        customer_name: sanitize(formData.fullName),
        customer_email: sanitize(formData.email),
        customer_phone: sanitize(formData.phone),
        shipping_address: sanitize(`${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`),
        items: cart,
        total_amount: parseFloat(total),
        payment_method: 'paypal',
        notes: sanitize(formData.notes),
        status: 'pending_payment',
        created_at: new Date().toISOString()
      };
      const { data, error } = await supabase.from('orders').insert([orderData]).select();
      if (error) throw error;
      setSavedOrderId(data[0].order_code);
      setStep(2);
    } catch (error) {
      console.error('Error saving order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalApprove = async (data, actions) => {
    const details = await actions.order.capture();
    // Update order status to paid
    await supabase
      .from('orders')
      .update({ status: 'paid', payment_id: details.id })
      .eq('id', savedOrderId);
    clearCart();
    navigate(`/order-confirmation/${savedOrderId}`);
  };

  if (cart.length === 0 && step === 1) {
    return (
      <PageTransition>
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1>Your cart is empty</h1>
          <Link to="/shop" className="btn-outline">Continue Shopping</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="checkout-page">
        <div className="page-hero" style={{ paddingTop: '140px', paddingBottom: '40px' }}>
          <div className="container center">
            <div className="checkout-steps">
              <div className={`step ${step >= 1 ? 'active' : ''}`}><span>1</span> Shipping Info</div>
              <div className="step-divider"></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}><span>2</span> Payment</div>
              <div className="step-divider"></div>
              <div className="step"><span>3</span> Confirmation</div>
            </div>
            <h1>{step === 1 ? 'Checkout' : 'Complete Payment'}</h1>
          </div>
        </div>

        <section className="section-padding">
          <div className="container">

            {/* STEP 1: Shipping Form */}
            {step === 1 && (
              <div className="checkout-layout">
                <div className="checkout-form">
                  <h2>Shipping Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address *</label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>City *</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>State *</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>Zip Code *</label>
                        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Order Notes (Optional)</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Any special instructions?" />
                    </div>
                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? 'Saving...' : 'Continue to Payment →'}
                    </button>
                  </form>
                </div>

                <div className="order-summary">
                  <h2>Order Summary</h2>
                  <div className="summary-items">
                    {cart.map((item) => (
                      <div key={item.id} className="summary-item">
                        <img src={item.image} alt={item.title} />
                        <div><h4>{item.title}</h4><p>Qty: {item.quantity}</p></div>
                        <span>${getItemTotal(item)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-total">
                    <div className="total-row"><span>Subtotal:</span><span>${getCartTotal().toFixed(2)}</span></div>
                    <div className="total-row"><span>Shipping:</span><span>${shipping.toFixed(2)}</span></div>
                    <div className="total-row final"><strong>Total:</strong><strong>${total}</strong></div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Payment */}
            {step === 2 && (
              <div className="payment-step">
                <div className="payment-widget">
                  <div className="payment-summary">
                    <h3>Order Summary</h3>
                    <div className="payment-items">
                      {cart.map((item, i) => (
                        <div key={i} className="payment-item-row">
                          <span>{item.quantity}x {item.title}</span>
                          <span>${getItemTotal(item)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="payment-total-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                    <div className="payment-total-row final"><strong>Total</strong><strong>${total}</strong></div>
                  </div>

                  <div className="payment-actions">
                    <p className="payment-note">
                      <i className="fas fa-lock"></i>
                      Complete your payment securely via PayPal. You'll be redirected back once done.
                    </p>

                    <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD', intent: 'capture' }}>
                      <PayPalButtons
                        style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: { value: total },
                              description: cart.map(i => `${i.quantity}x ${i.title}`).join(', ')
                            }]
                          });
                        }}
                        onApprove={handlePayPalApprove}
                        onError={(err) => {
                          console.error('PayPal error:', err);
                          alert('Payment failed. Please try again.');
                        }}
                      />
                    </PayPalScriptProvider>

                    <div className="secure-badge">
                      <i className="fas fa-lock"></i> 100% Secure Transaction
                    </div>

                    <button className="back-btn" onClick={() => setStep(1)}>
                      ← Back to Shipping
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Checkout;
