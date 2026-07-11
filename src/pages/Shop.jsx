import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useCart } from '../context/CartContext';
import { supabase } from '../config/supabase';

const Shop = () => {
  const { addToCart, getCartCount, getCartTotal, setIsCartOpen } = useCart();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if admin is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // MOCK DATA
  const products = [
    {
      id: 1,
      category: 'Curios',
      title: 'Handwoven Somali Basket',
      price: '$45.00',
      image: 'https://i.pinimg.com/1200x/eb/f3/4b/ebf34bd2c6cd584495533ded9c3d1ca9.jpg',
      desc: 'Crafted by women in our crafting circle. Natural fibers.'
    },
    {
      id: 2,
      category: 'Merch',
      title: 'Nisaa "Empower" Tote',
      price: '$20.00',
      image: '/Nisaa_Tote_Bag.png',
      desc: '100% Cotton heavy-duty tote bag with Nisaa logo.'
    },
    {
      id: 3,
      category: 'Curios',
      title: 'Beaded Hope Bracelet',
      price: '$15.00',
      image: 'https://i.pinimg.com/1200x/b0/94/02/b09402ecfc2c948f2e8782a5a68bdfe2.jpg',
      desc: 'Handmade colorful beads representing hope and unity.'
    }
  ];

  return (
    <PageTransition>
      <div className="shop-page">
        
        {/* Floating Cart Button */}
        {getCartCount() > 0 && (
          <button className="floating-cart-btn" onClick={() => setIsCartOpen(true)}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{getCartCount()}</span>
            <span className="cart-total">${getCartTotal().toFixed(2)}</span>
          </button>
        )}
        
        {/* HERO */}
        <div className="page-hero" style={{ paddingTop: '120px', paddingBottom: '50px', height: 'auto', minHeight: 'unset' }}>
            <div className="container center-text">
                <span className="sub-head" style={{ color: '#BCA88E' }}>Shop for a Cause</span>
                <h1>Empowerment <br /><em>Marketplace</em></h1>
            </div>
        </div>

        {/* SHOP GRID */}
        <section className="section-padding" style={{ background: '#fff', paddingTop: '20px' }}>
            <div className="container">

               {/* Intro Text + Track Button */}
               <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ 
                        color: '#4A2C4A', 
                        fontFamily: '"Cinzel", serif', 
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '2.2rem',
                        fontWeight: '500',
                        marginBottom: '10px'
                    }}>
                        Curios & Collection
                    </h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '20px' }}>
                        Browse handmade items by our clients and official Nisaa merchandise.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link 
                          to="/track-order"
                          style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 24px',
                              background: 'transparent',
                              border: '2px solid #4A2C4A',
                              borderRadius: '50px',
                              color: '#4A2C4A',
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.background = '#4A2C4A'; e.currentTarget.style.color = 'white'; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A2C4A'; }}
                      >
                          <i className="fas fa-truck"></i> Track Your Order
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 24px',
                              background: '#4A2C4A',
                              border: '2px solid #4A2C4A',
                              borderRadius: '50px',
                              color: 'white',
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A2C4A'; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = '#4A2C4A'; e.currentTarget.style.color = 'white'; }}
                        >
                          <i className="fas fa-tachometer-alt"></i> Admin Dashboard
                        </Link>
                      )}
                    </div>
                </div>

                {/* Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                    gap: '40px' 
                }}>
                    {products.map((item) => (
                        <div key={item.id} 
                            onClick={() => addToCart(item)}
                            style={{ 
                            border: '1px solid #eee', 
                            borderRadius: '15px', 
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Image Area */}
                            <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <span style={{ 
                                    position: 'absolute', 
                                    top: '15px', 
                                    right: '15px', 
                                    background: 'rgba(255,255,255,0.9)', 
                                    padding: '5px 12px', 
                                    borderRadius: '20px', 
                                    fontSize: '0.8rem', 
                                    fontWeight: 'bold',
                                    color: '#4A2C4A'
                                }}>
                                    {item.category}
                                </span>
                            </div>

                            {/* Text Area */}
                            <div style={{ padding: '25px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#333' }}>{item.title}</h3>
                                    <span style={{ fontWeight: 'bold', color: '#800080', fontSize: '1.1rem' }}>{item.price}</span>
                                </div>
                                <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {item.desc}
                                </p>
                                
                                {/* Button */}
                                <button 
                                    onClick={() => addToCart(item)}
                                    style={{ 
                                        width: '100%', 
                                        padding: '12px', 
                                        background: '#4A2C4A', 
                                        color: 'white', 
                                        border: 'none', 
                                        borderRadius: '8px', 
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Shop;