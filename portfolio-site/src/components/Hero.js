import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import './Hero.css';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import arrow from './img/down-arrow.svg';
import 'animate.css';
import { motion } from 'framer-motion';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    const loadInAnimation = () => {
      anime({
        targets: ['.word1', '.word2', '.word3', '.word4', '.word5'],
        opacity: [0, 1],
        duration: 16000,
        delay: anime.stagger(100),
      });
    };

    loadInAnimation();
  }, []);

  const arrowClickAnimation = () => {
    anime({
      targets: '.nav-arrow',
      translateY: '20px',
      duration: 800,
      direction: 'alternate',
    });
  };

  return (
    <div className='hero-section' id='hero'>
      {/*tsParticle hero animation configuration*/}
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 20, density: { enable: true, value_area: 600 } },
            color: { value: '#ffffff' },
            shape: {
              type: 'square',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.1,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 15,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: '#ffffff',
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'top',
              straight: false,
              out_mode: 'bounce',
              bounce: true,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: false, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 1 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <h1 className='hero-name'>
        <span className='word1'>TAIAO</span>{' '}
        <span className='word2'>KAWITI</span>
      </h1>
      <h2 className='hero-tagline'>
        <span className='word3'>Aspiring</span>{' '}
        <span className='word4'>full-stack</span>{' '}
        <span className='word5'>developer.</span>
      </h2>

      <div className='arrow-nav-container' onClick={arrowClickAnimation}>
        <motion.span whileHover={{ scale: 1.02, y: 15 }}>
          <a href='#about'>
            <img src={arrow} alt='arrow' className='nav-arrow' />
          </a>
        </motion.span>
      </div>
    </div>
  );
}
