import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
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

  return (
    <div className='hero-section'>
      <h1 className='hero-name'>
        <span className='word1'>TAIAO</span>{' '}
        <span className='word2'>KAWITI</span>
      </h1>
      <h2 className='hero-tagline'>
        <span className='word3'>Aspiring</span>{' '}
        <span className='word4'>full-stack</span>{' '}
        <span className='word5'>developer.</span>
      </h2>
    </div>
  );
};

export default Hero;
