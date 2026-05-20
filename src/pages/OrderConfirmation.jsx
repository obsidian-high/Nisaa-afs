import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../config/supabase';
import PageTransition from '../components/PageTransition';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_code', orderId)
        .single();
      if (error) throw error;
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const getItemTotal = (item) => {
    const price = parseFloat(String(item.price).replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  if (loading) {
    return (
      <PageTransition>
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading order details...</p>
        </div>
      </PageTransition>
    );
  }

  if (!order) {
    return (
      <PageTransition>
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1>Order not found</h1>
          <Link to="/shop" className="btn-outline">Continue Shopping</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="order-confirmation-page">
        <div className="page-hero" style={{ paddingTop: '140px', paddingBottom: '40px' }}>
          <div className="container center">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>Order Confirmed!</h1>
            <p>Thank you for your purchase. Your order has been received.</p>
          </div>
        </div>

        <section className="section-padding" style={{ minHeight: '60vh' }}>
          <div className="container">
            <div className="order-details-card">

              <div className="order-header">
                <div>
                  <h2>Order {order.order_code}</h2>
                  <p>Placed on {new Date(order.created_at).toLocaleDateString()}</p>
                </div>
                <span className={`status-badge ${order.status}`}>
                  {order.status.toUpperCase()}
                </span>
              </div>

              <div className="order-info-grid">
                <div className="info-section">
                  <h3>Customer Information</h3>
                  <p><strong>Name:</strong> {order.customer_name}</p>
                  <p><strong>Email:</strong> {order.customer_email}</p>
                  <p><strong>Phone:</strong> {order.customer_phone}</p>
                </div>
                <div className="info-section">
                  <h3>Shipping Address</h3>
                  <p>{order.shipping_address}</p>
                </div>
                <div className="info-section">
                  <h3>Payment Method</h3>
                  <p>{order.payment_method.toUpperCase()}</p>
                </div>
              </div>

              <div className="order-items-section">
                <h3>Order Items</h3>
                <div className="order-items-list">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.title} />
                      <div className="item-info">
                        <h4>{item.title}</h4>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="item-price">${getItemTotal(item)}</div>
                    </div>
                  ))}
                </div>

                <div className="order-total">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>${order.total_amount.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping:</span>
                    <span>$5.00</span>
                  </div>
                  <div className="total-row final">
                    <strong>Total:</strong>
                    <strong>${(order.total_amount + 5).toFixed(2)}</strong>
                  </div>
                </div>
              </div>

              <div className="order-actions">
                <p className="confirmation-note">
                  <i className="fas fa-info-circle"></i>
                  We'll notify you when your order ships to {order.shipping_address}!
                </p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to={`/track-order`} className="btn-donate" style={{ textDecoration: 'none' }}>
                    <i className="fas fa-truck" style={{ marginRight: '8px' }}></i>Track Order {order.order_code}
                  </Link>
                  <Link to="/shop" className="btn-outline">Continue Shopping</Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default OrderConfirmation;
