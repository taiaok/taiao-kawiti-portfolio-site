import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
  return (
    <>
      <Navbar sticky='top'>
        <Navbar.Brand href='#hero'>TAIAO KAWITI</Navbar.Brand>
        <div className='nav-container'>
          <Nav.Link href='#about'>ABOUT</Nav.Link>
          <Nav.Link href='#projects'>PROJECTS</Nav.Link>
          <Nav.Link href='#contact'>CONTACT</Nav.Link>
        </div>
      </Navbar>
    </>
  );
}
