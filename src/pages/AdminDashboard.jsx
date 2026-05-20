import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import PageTransition from '../components/PageTransition';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

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
      
      // Refresh orders
      fetchOrders();
      alert('Order status updated successfully!');
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order status');
    }
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    revenue: orders.reduce((sum, o) => sum + o.total_amount, 0)
  };

  if (loading) {
    return (
      <PageTransition>
        <div className="page-hero">
          <div className="container center">
            <p>Loading dashboard...</p>
          </div>
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
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <i className="fas fa-shopping-cart"></i>
                <div>
                  <h3>{stats.total}</h3>
                  <p>Total Orders</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>{stats.pending}</h3>
                  <p>Pending</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="fas fa-truck"></i>
                <div>
                  <h3>{stats.shipped}</h3>
                  <p>Shipped</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="fas fa-dollar-sign"></i>
                <div>
                  <h3>${stats.revenue.toFixed(2)}</h3>
                  <p>Total Revenue</p>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="order-filters">
              <button 
                className={filter === 'all' ? 'active' : ''} 
                onClick={() => setFilter('all')}
              >
                All Orders
              </button>
              <button 
                className={filter === 'pending' ? 'active' : ''} 
                onClick={() => setFilter('pending')}
              >
                Pending
              </button>
              <button 
                className={filter === 'processing' ? 'active' : ''} 
                onClick={() => setFilter('processing')}
              >
                Processing
              </button>
              <button 
                className={filter === 'shipped' ? 'active' : ''} 
                onClick={() => setFilter('shipped')}
              >
                Shipped
              </button>
              <button 
                className={filter === 'delivered' ? 'active' : ''} 
                onClick={() => setFilter('delivered')}
              >
                Delivered
              </button>
            </div>

            {/* Orders Table */}
            <div className="orders-table">
              {filteredOrders.length === 0 ? (
                <p className="no-orders">No orders found</p>
              ) : (
                filteredOrders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-card-header">
                      <div>
                        <h3>Order #{order.id}</h3>
                        <p>{new Date(order.created_at).toLocaleString()}</p>
                      </div>
                      <span className={`status-badge ${order.status}`}>
                        {order.status.toUpperCase()}
                      </span>
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
                        <h4>Items ({order.items.length})</h4>
                        {order.items.map((item, idx) => (
                          <p key={idx}>{item.quantity}x {item.title}</p>
                        ))}
                      </div>

                      <div className="order-total-preview">
                        <h4>Total</h4>
                        <p className="total-amount">${order.total_amount.toFixed(2)}</p>
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
