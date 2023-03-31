import './App.css';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default App;
