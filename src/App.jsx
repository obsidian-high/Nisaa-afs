import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- ADD THIS

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
import DVAwareness from './pages/Blog/DVAwareness'; // <--- Import the file

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar sits outside Routes so it's ALWAYS visible */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Placeholders */}
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/gala" element={<BlogGala />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/blog/gala" element={<Gala />} />
          <Route path="/blog/dv-awareness" element={<DVAwareness />} />
        </Routes>
        
        {/* The Real Footer Component */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;