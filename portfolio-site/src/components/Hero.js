import anime from 'animejs/lib/anime.es.js';
import { Tilt } from 'react-tilt';
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

  // const tiltOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 10, // max tilt rotation (degrees)
  //   perspective: 5000, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 5000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  // };

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
