import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Home.css';
import NavBar from './Navbar';
import Projects from './Projects';
import About from './About.js';
import Hero from './Hero';
import Contact from './Contact';

export default function Home() {
  return (
    <div className='content-container'>
      <Hero />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
