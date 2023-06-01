import './About.css';
import aboutPic from './img/about-pic.jpeg';

export default function About() {
  return (
    <div className='about-section' id='about'>
      <h2 className='about-title'>ABOUT</h2>
      <img src={aboutPic} alt='about' className='about-picture' />
      <p className='about-me-blurb'>
        Kia ora! My name is Taiao and I'm currently studying a diploma in web
        development at Developers Institute NZ. I love to build beautiful and
        functional websites and am looking for a full-stack development role.
      </p>
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
      <div className='divider'></div>
    </div>
  );
}
