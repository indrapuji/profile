import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

function About() {
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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="title-about"
      >
        About me
      </motion.h1>

      <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} className="sub-about">
        Self-motifated, organized.
      </motion.h4>
      <Card style={{ backgroundColor: 'black' }} className="card-about">
        <motion.div variants={container} initial="hidden" animate="visible">
          <Card.Body>
            <motion.div variants={item}>
              <Card.Text>
                I started my programming career from 2020. I have successfully completed the boothcamp in jakarta called
                Hacktiv8 Indonesia. This boothcamp has opened a good opportunities for my professional development.
              </Card.Text>
            </motion.div>
            <motion.div variants={item}>
              <Card.Text>
                Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to
                follow my fascinations wherever they take me. I’m passionate, expressive, spirit with a natural ability
                to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost
                impulsive need to act on them.
              </Card.Text>
            </motion.div>
            <motion.div variants={item}>
              <Card.Text>I’m constantly enhancing my knowledge and I aim to learn more day after day</Card.Text>
            </motion.div>
            <motion.div variants={item}>
              <Card.Text className="space-about">
                I’m based in Bekasi (West Java, Indonesia) <br />
                You can contact me at <br />
                <strong style={{ color: '#45fc03', fontSize: 30 }}>indrapuji@gmail.com</strong>
              </Card.Text>
            </motion.div>
          </Card.Body>
        </motion.div>
      </Card>
    </motion.div>
  );
}
export default About;
