import React from 'react'
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: .4, y: 70 },
  animate: { opacity: 1, y: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;