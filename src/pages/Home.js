import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const history = useHistory();
  const pageTransition = {
    init: {
      x: -500,
    },
    in: {
      x: 0,
    },
    out: {
      x: -200,
      opacity: 0,
    },
  };
  function about() {
    history.push('/profile/about');
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <div className="title">
        <h2>Hello, my name is</h2>
        <motion.h1 whileHover={{ color: 'white' }} animate={{ y: -5 }} className="title-name" onClick={about}>
          Indra Puji Novirwan
        </motion.h1>
        <h2>Front end {'&'} Mobile Developer...</h2>
        <p className="note">Self-motifated, organized</p>
      </div>
    </motion.div>
  );
}
export default Home;
