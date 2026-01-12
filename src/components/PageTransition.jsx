import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// CHOOSE YOUR ANIMATION STYLE HERE
// ==========================================

// --- OPTION 1: THE "NETFLIX" SLIDE (Active) ---
// Feels like a mobile app. Pages slide in from the right.
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

// --- OPTION 2: THE "ELEVATOR" POP UP (Commented Out) ---
// Pages rise up from the bottom. Very energetic.
/*
const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 }
};
*/

// --- OPTION 3: THE "ZOOM OUT" (Commented Out) ---
// Pages fade in while shrinking slightly. Very dramatic.
/*
const animations = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};
*/

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }} // Slightly faster duration
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;