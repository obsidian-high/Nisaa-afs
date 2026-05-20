import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import PageTransition from '../components/PageTransition';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'nisaa-admin-2026';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem('nisaa-admin') === 'true'
  );
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (authenticated) fetchOrders();
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem('nisaa-admin', 'true');
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password.');
      setPasswordInput('');
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);
      if (error) throw error;
      fetchOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order status');
    }
  };

  if (!authenticated) {
    return (
      <PageTransition>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream-bg)' }}>
          <div style={{ background: 'white', padding: '50px 40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
            <i className="fas fa-lock" style={{ fontSize: '2.5rem', color: 'var(--deep-purple)', marginBottom: '20px' }}></i>
            <h2 style={{ fontFamily: 'var(--font-head)', color: 'var(--deep-purple)', marginBottom: '10px' }}>Admin Access</h2>
            <p style={{ color: '#888', marginBottom: '30px', fontSize: '0.9rem' }}>Enter your password to continue</p>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', marginBottom: '15px', outline: 'none' }}
                autoFocus
              />
              {authError && <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginBottom: '15px' }}>{authError}</p>}
              <button type="submit" style={{ width: '100%', padding: '14px', background: 'var(--deep-purple)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Enter Dashboard
              </button>
            </form>
          </div>
        </div>
      </PageTransition>
    );
  }

  const filteredOrders = filter === 'all'
    ? orders
    : orders.filter(order => order.status === filter);

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    revenue: orders.reduce((sum, o) => sum + (o.total_amount || 0), 0)
  };

  if (loading) {
    return (
      <PageTransition>
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading dashboard...</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="admin-dashboard">
        <div className="page-hero" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
          <div className="container">
            <h1>Admin Dashboard</h1>
            <p>Manage your orders and track sales</p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card"><i className="fas fa-shopping-cart"></i><div><h3>{stats.total}</h3><p>Total Orders</p></div></div>
              <div className="stat-card"><i className="fas fa-clock"></i><div><h3>{stats.pending}</h3><p>Pending</p></div></div>
              <div className="stat-card"><i className="fas fa-truck"></i><div><h3>{stats.shipped}</h3><p>Shipped</p></div></div>
              <div className="stat-card"><i className="fas fa-dollar-sign"></i><div><h3>${stats.revenue.toFixed(2)}</h3><p>Total Revenue</p></div></div>
            </div>

            <div className="order-filters">
              {['all', 'pending', 'processing', 'shipped', 'delivered'].map(f => (
                <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="orders-table">
              {filteredOrders.length === 0 ? (
                <p className="no-orders">No orders found</p>
              ) : (
                filteredOrders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-card-header">
                      <div>
                        <h3>Order {order.order_code || `#${order.id}`}</h3>
                        <p>{new Date(order.created_at).toLocaleString()}</p>
                      </div>
                      <span className={`status-badge ${order.status}`}>{order.status.toUpperCase()}</span>
                    </div>

                    <div className="order-card-body">
                      <div className="order-customer">
                        <h4>Customer</h4>
                        <p><strong>{order.customer_name}</strong></p>
                        <p>{order.customer_email}</p>
                        <p>{order.customer_phone}</p>
                      </div>
                      <div className="order-shipping">
                        <h4>Shipping Address</h4>
                        <p>{order.shipping_address}</p>
                      </div>
                      <div className="order-items-preview">
                        <h4>Items ({order.items?.length})</h4>
                        {order.items?.map((item, idx) => (
                          <p key={idx}>{item.quantity}x {item.title}</p>
                        ))}
                      </div>
                      <div className="order-total-preview">
                        <h4>Total</h4>
                        <p className="total-amount">${order.total_amount?.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="order-card-footer">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
