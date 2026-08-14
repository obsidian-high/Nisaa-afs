import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './ErrorBoundary';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

// Import Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import BlogGala from './pages/Blog/BlogGala';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import GetInvolved from './pages/GetInvolved';
import Gala from './pages/Blog/Gala';
import DVAwareness from './pages/Blog/DVAwareness';
import PullUpAndStitch from './pages/Blog/PullUpAndStitch';
import LaurenCollinsWellness from './pages/Blog/LaurenCollinsWellness';
import PullUpAndStitchSep from './pages/Blog/PullUpAndStitchSep';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import AdminDashboard from './pages/AdminDashboard';
import TrackOrder from './pages/TrackOrder';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <CartSidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/gala" element={<BlogGala />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/blog/gala" element={<Gala />} />
              <Route path="/blog/dv-awareness" element={<DVAwareness />} />
              <Route path="/blog/pull-up-and-stitch" element={<PullUpAndStitch />} />
              <Route path="/blog/lauren-collins-wellness" element={<LaurenCollinsWellness />} />
              <Route path="/blog/pull-up-and-stitch-september" element={<PullUpAndStitchSep />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
            
            <Footer /> 
          </div>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;