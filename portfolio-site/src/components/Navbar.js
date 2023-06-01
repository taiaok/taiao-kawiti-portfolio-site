import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   return (
//     <div className='navbar'>
//       <h3>ABOUT</h3>
//       <h3>PROJECTS</h3>
//       <h3>
//         <a href='#contact' target='_blank' rel='noopener'>
//           CONTACT
//         </a>
//       </h3>
//     </div>
//   );
// }

function NavBar() {
  return (
    <>
      <Navbar>
        <Nav.Link href='#about'>ABOUT</Nav.Link>
        <Nav.Link href='#projects'>PROJECTS</Nav.Link>
        <Nav.Link href='#contact'>CONTACT</Nav.Link>
      </Navbar>
    </>
  );
}

export default NavBar;
