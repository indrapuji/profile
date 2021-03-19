import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const pageTransition = {
    init: {
      x: -200,
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: -200,
      opacity: 0,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <h1 className="title-portfolio">Portfolio</h1>
      <div className="preview-portfolio"></div>
    </motion.div>
  );
}
export default Portfolio;
