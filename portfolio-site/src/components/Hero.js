import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const loadInAnimation = () => {
    anime({
      targets: '.hero-section',
      opacity: [0, 100],
      autoplay: true,
      duration: 500,
      delay: anime.stagger(100),
    });
  };

  return (
    <div className='hero-section'>
      <h1 className='hero-name'>TAIAO KAWITI</h1>
      <h2 className='hero-tagline'>Aspiring full-stack developer.</h2>
    </div>
  );
};

export default Hero;
