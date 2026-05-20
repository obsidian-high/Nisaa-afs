import { useState } from 'react';
import { supabase } from '../config/supabase';
import PageTransition from '../components/PageTransition';

const steps = ['pending_payment', 'pending', 'processing', 'shipped', 'delivered'];

const stepLabels = {
  pending_payment: { label: 'Payment Pending', icon: 'fas fa-credit-card', desc: 'Awaiting payment confirmation.' },
  pending:         { label: 'Order Received',  icon: 'fas fa-inbox',       desc: 'Your order has been received and is being reviewed.' },
  processing:      { label: 'Processing',      icon: 'fas fa-box-open',    desc: 'We are preparing your items for shipment.' },
  shipped:         { label: 'Shipped',          icon: 'fas fa-truck',       desc: 'Your order is on its way to you!' },
  delivered:       { label: 'Delivered',        icon: 'fas fa-check-circle',desc: 'Your order has been delivered. Enjoy!' },
};

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);

    try {
      // Try order_code first, then fall back to numeric id
      let query = supabase.from('orders').select('*');
      
      if (isNaN(orderId.trim())) {
        query = query.eq('order_code', orderId.trim().toUpperCase());
      } else {
        query = query.eq('id', orderId.trim());
      }

      const { data, error } = await query.single();

      if (error || !data) {
        setError('No order found with that number. Please check and try again.');
      } else {
        setOrder(data);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentStepIndex = order ? steps.indexOf(order.status) : -1;

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', background: 'var(--cream-bg)' }}>
        <div className="page-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
          <div className="container center">
            <span className="sub-head">Nisaa Curio Shop</span>
            <h1>Track Your Order</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto' }}>
              Enter your order number to see the current status of your delivery.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container" style={{ maxWidth: '700px' }}>

            {/* Search Form */}
            <div className="track-search-card">
              <form onSubmit={handleTrack} className="track-form">
                <div className="track-input-group">
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter your order code (e.g. NSA-7X4K2M) or order number"
                    required
                  />
                </div>
                <button type="submit" className="track-btn" disabled={loading}>
                  {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Track'}
                </button>
              </form>
              {error && (
                <p className="track-error"><i className="fas fa-exclamation-circle"></i> {error}</p>
              )}
            </div>

            {/* Order Result */}
            {order && (
              <div className="track-result">
                <div className="track-result-header">
                  <div>
                    <h2>Order {order.order_code || `#${order.id}`}</h2>
                    <p>Placed on {new Date(order.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <span className={`status-badge ${order.status}`}>
                    {stepLabels[order.status]?.label || order.status}
                  </span>
                </div>

                {/* Progress Tracker */}
                <div className="track-progress">
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const info = stepLabels[step];
                    return (
                      <div key={step} className={`track-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                        <div className="track-step-icon">
                          <i className={info.icon}></i>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`track-step-line ${isCompleted ? 'completed' : ''}`}></div>
                        )}
                        <div className="track-step-label">
                          <strong>{info.label}</strong>
                          {isCurrent && <p>{info.desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Order Details */}
                <div className="track-details">
                  <div className="track-detail-row">
                    <h4>Items Ordered</h4>
                    <div>
                      {order.items?.map((item, i) => (
                        <div key={i} className="track-item">
                          <img src={item.image} alt={item.title} />
                          <div>
                            <p>{item.title}</p>
                            <span>Qty: {item.quantity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="track-detail-row">
                    <h4>Shipping To</h4>
                    <p>{order.shipping_address}</p>
                  </div>
                  <div className="track-detail-row">
                    <h4>Order Total</h4>
                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--deep-purple)' }}>
                      ${order.total_amount?.toFixed(2)}
                    </p>
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

export default TrackOrder;
