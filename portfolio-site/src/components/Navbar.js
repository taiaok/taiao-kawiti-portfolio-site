import './Navbar.css';

export default function NavBar() {
  return (
    <div className='navbar'>
      <h3>ABOUT</h3>
      <h3>PROJECTS</h3>
      <h3>
        <a href='#contact' target='_blank' rel='noopener'>
          CONTACT
        </a>
      </h3>
    </div>
  );
}
