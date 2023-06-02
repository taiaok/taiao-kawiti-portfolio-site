import './Home.css';
import NavBar from './Navbar';
import Projects from './Projects';
import About from './About';
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
