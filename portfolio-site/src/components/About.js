import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './About.css';
import 'animate.css';
import aboutPic from './img/about-pic.jpeg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// TODO: add github ticker "what ive been up to"
export default function About() {
  return (
    <AnimationOnScroll
      animateIn='animate__fadeInLeft'
      animateOnce={true}
      animatePreScroll={false}
      duration={1}
    >
      <div className='about-section' id='about'>
        <AnimationOnScroll
          animateIn='animate__fadeInLeft'
          animateOnce={true}
          animatePreScroll={false}
          duration={1}
          delay={3}
        >
          <h2 className='about-title'>ABOUT</h2>
        </AnimationOnScroll>
        <img src={aboutPic} alt='about' className='about-picture' />
        <p className='about-me-blurb'>
          Kia ora! I'm Taiao, a beginner web developer and student at Developers
          Institute NZ. I absolutely love what I do! Currently, I'm seeking
          full-stack development roles to further hone my skills. When I'm not
          coding, I love to read, work out, and listen to (or make) music.
        </p>
        <AnimationOnScroll
          animateIn='animate__fadeInLeft'
          animateOnce={true}
          animatePreScroll={false}
          duration={1}
          delay={2}
        >
          <div className='tech-stack'>
            <img
              className='dev-icon html5'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg'
              alt='html5'
            />

            <img
              className='dev-icon css3'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg'
              alt='css3'
            />

            <img
              className='dev-icon js'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
              alt='js'
            />

            <img
              className='dev-icon react'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
              alt='react'
            />

            <img
              className='dev-icon nodejs'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg'
              alt='nodejs'
            />

            <img
              className='dev-icon docker'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg'
              alt='nodejs'
            />
          </div>
        </AnimationOnScroll>

        <div className='divider'></div>
      </div>
    </AnimationOnScroll>
  );
}
