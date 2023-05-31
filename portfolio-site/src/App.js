import './App.css';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container'>
      <div className='content-container'>
        <Hero />
        <NavBar />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
