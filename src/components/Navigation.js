import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { RiSettings4Line } from 'react-icons/ri';
import { FaRegEye, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navigation() {
  const history = useHistory();
  const location = useLocation();
  const PathLoc = (path) => {
    if (path === location.pathname) {
      return '#45fc03';
    } else {
      return 'grey';
    }
  };

  const SocialMedia = [
    { href: 'https://twitter.com/indra_pn', icon: <FaTwitter size="20" /> },
    { href: 'https://www.instagram.com/indrapuji/', icon: <FaInstagram size="20" /> },
    { href: 'https://www.linkedin.com/in/indra-puji-novirwan/', icon: <FaLinkedin size="20" /> },
    { href: 'https://github.com/indrapuji', icon: <FaGithub size="20" /> },
  ];

  const NavPath = [
    { CName: 'navbar mr-5', to: '/', icon: <AiOutlineHome size="30" color={PathLoc('/')} /> },
    { CName: 'navbar mr-5', to: '/about', icon: <BsPerson size="30" color={PathLoc('/about')} /> },
    { CName: 'navbar mr-5', to: '/resume', icon: <RiSettings4Line size="30" color={PathLoc('/resume')} /> },
    { CName: '', to: '/portfolio', icon: <FaRegEye size="30" color={PathLoc('/portfolio')} /> },
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        style={{
          borderBottomStyle: 'solid',
          color: '#45fc03',
          backgroundColor: 'black',
        }}
      >
        {SocialMedia.map((data) => {
          return (
            <Navbar key={data.href}>
              <Nav className="navbar">
                <motion.a
                  whileHover={{ color: 'white', scale: 1.5 }}
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.icon}
                </motion.a>
              </Nav>
            </Navbar>
          );
        })}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mx-3" style={{ color: 'grey' }}>
          {NavPath.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                className={item.CName}
                whileHover={{ color: '#45fc03', scale: 1.5 }}
                onClick={() => history.push(item.to)}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigation;
