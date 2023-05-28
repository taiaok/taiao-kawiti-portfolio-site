import './App.css';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <div className='content-container'>
        <Hero />
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
