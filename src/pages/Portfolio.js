import React from 'react';
import { motion } from 'framer-motion';
import { Card, Row, Col } from 'react-bootstrap';
import kanban from '../assets/kanban.jpg';
import antrian from '../assets/antrian.jpg';

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

  const Porto = [
    {
      images: antrian,
      title: 'Antrian',
      web: '-',
      Tech: 'TypeScript, Socket.IO, NextJS, Prisma, PostgreSQL',
      Desc: 'Realtime Sistem Antrian',
      link1: 'http://bit.ly/next-antrian',
      link2: '-',
    },
    {
      images: kanban,
      title: 'Medilab',
      web: 'https://form.medilab-clinic.com',
      Tech: 'JavaScript, CoreUI, Express, Sequelize, PostgreSQL',
      Desc: 'Form to Register & Update Patient Clinic Medilab',
      link1: 'http://bit.ly/form-medilab',
      link2: '-',
    },
    {
      images: kanban,
      title: 'Catheter',
      web: 'https://catheter.co.id/',
      Tech: 'JavaScript, ReactJs',
      Desc: 'Company Profile',
      link1: '-',
      link2: 'https://github.com/indrapuji/baraSehatJaya',
    },
    {
      images: kanban,
      title: 'Digicorpu',
      web: '-',
      Tech: 'TypeScript, React Native, Redux Saga',
      Desc: 'Mobile Apps for Telkom University',
      link1: 'http://bit.ly/rn-digicorpu',
      link2: '-',
    },
    {
      images: kanban,
      title: 'Cinema Hero',
      web: '-',
      Tech: 'JavaScript, React Native, Express, Redux, Sequelize, PostgreSql',
      Desc: 'Online Database of Information Related to Movie (App)',
      link1: 'http://bit.ly/rn-moviehero',
      link2: 'http://github.com/indrapuji/MovieApp',
    },
    {
      images: kanban,
      title: 'MovieList',
      web: 'https://cinemadb-oedyearwc.vercel.app/',
      Tech: 'JavaScript, ReactJs, Redux',
      Desc: 'Online Database of Information Related to Movie (Web)',
      link1: '-',
      link2: 'https://github.com/indrapuji/movieList',
    },
    {
      images: kanban,
      title: 'Jatisejahtera',
      web: 'https://jatisejahtera.or.id/',
      Tech: 'JavaScript, ReactJs, Redux, Express, Sequelize, PostgreSql',
      Desc: 'Company Profile & ClaimApp',
      link1: '-',
      link2: '-',
    },
  ];
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <h1 className="title-portfolio">Portfolio</h1>
      <div className="preview-portfolio">
        <Row xs={1} md={2} className="g-4">
          {Porto.map((item) => (
            <Col key={item.title} style={{ padding: 20 }}>
              <Card>
                <Card.Img variant="top" src={item.images} />
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center' }}>
                    {item.title} <br />
                    <span style={{ textAlign: 'center' }}>
                      {item.web === '-' ? (
                        '-'
                      ) : (
                        <a
                          style={{ fontWeight: 'normal', fontSize: 13 }}
                          href={item.web}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.web}
                        </a>
                      )}
                    </span>
                  </Card.Title>
                  <Card.Text style={{ fontWeight: 'bold', color: 'blue' }}>
                    Tech Stack :<br />
                    <span style={{ color: 'black', fontWeight: 'normal' }}>{item.Tech}</span>
                  </Card.Text>
                  <Card.Text style={{ fontWeight: 'bold', color: 'blue' }}>
                    Description :<br />
                    <span style={{ color: 'black', fontWeight: 'normal' }}>{item.Desc}</span>
                  </Card.Text>
                  <Card.Text style={{ fontWeight: 'bold', color: 'blue' }}>
                    Preview / Source : &nbsp;
                    {item.link1 !== '-' ? (
                      <a style={{ fontWeight: 'normal' }} href={item.link1} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      '-'
                    )}
                    &nbsp; / &nbsp;
                    {item.link2 !== '-' ? (
                      <a style={{ fontWeight: 'normal' }} href={item.link2} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      '-'
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </motion.div>
  );
}
export default Portfolio;
