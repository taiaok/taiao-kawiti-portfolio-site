import './Hero.css';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import arrow from './img/down-arrow.svg';
import { motion } from 'framer-motion';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
      when: 'beforeChildren',
      staggerChildren: 3,
      duration: 5,
    },
  };

  return (
    <motion.div
      className='hero-section'
      id='hero'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 15, density: { enable: true, value_area: 600 } },
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
              speed: 0.6,
              direction: 'top',
              straight: false,
              out_mode: 'out',
              bounce: false,
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
              repulse: { distance: 200, duration: 1000 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <h1 className='hero-name'>
        <motion.span className='word1'>TAIAO</motion.span>{' '}
        <motion.span className='word2'>KAWITI</motion.span>
      </h1>
      <h2 className='hero-tagline'>
        <motion.span className='word3'>Aspiring</motion.span>{' '}
        <motion.span className='word4'>full-stack</motion.span>{' '}
        <motion.span className='word5'>developer.</motion.span>
      </h2>

      <div className='arrow-nav-container'>
        <motion.span whileHover={{ scale: 1.02, y: 15 }}>
          <a href='#about'>
            <img src={arrow} alt='arrow' className='nav-arrow' />
          </a>
        </motion.span>
      </div>
    </motion.div>
  );
}
