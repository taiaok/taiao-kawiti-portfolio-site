import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <>
      <Navbar sticky='top'>
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Navbar.Brand href='#hero'>TAIAO KAWITI</Navbar.Brand>
        </motion.span>
        <div className='nav-container'>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#about'>ABOUT</Nav.Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#projects'>PROJECTS</Nav.Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link href='#contact'>CONTACT</Nav.Link>
          </motion.span>
        </div>
      </Navbar>
    </>
  );
}
