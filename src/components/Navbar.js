import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css';

import { motion } from 'framer-motion';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar inverse collapseOnSelect expand='md' sticky='top' variant='dark'>
      <Navbar.Toggle
        className='navbar-hamburger'
        aria-controls='basic-navbar-nav'
      ></Navbar.Toggle>
      <Navbar.Collapse className='nav-container' id='basic-navbar-nav'>
        <Nav className='justify-content-center' style={{ flex: 1 }}>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#about'>ABOUT</Nav.Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#projects'>PROJECTS</Nav.Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#contact'>CONTACT</Nav.Link>
          </motion.span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
