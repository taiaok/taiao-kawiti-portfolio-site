import './Contact.css';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Contact() {
  return (
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animatePreScroll={false}
      animateOnce={true}
      duration={2}
    >
      <div className='contact-section' id='contact'>
        <h2 className='contact-title'>CONTACT</h2>
        <p>
          Whether you have a question, a collaboration proposal, or just want to
          say hello, feel free to reach out to me via email or Linkedin.
        </p>
        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/taiaokawiti/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='https://github.com/flowtyf' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='mailto:taiaokawiti@protonmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a
            href='https://drive.google.com/file/d/1va-GCTMhwg_6vAmGu-SP0A97iOQlriCz/view'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-solid fa-file-pdf'></i>
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
