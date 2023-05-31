import './App.css';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <div className='content-container'>
        <Hero />
        <NavBar />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
