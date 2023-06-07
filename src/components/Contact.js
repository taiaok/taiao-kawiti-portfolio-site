import './Contact.css';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from 'framer-motion';
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
          <motion.a
            href='https://www.linkedin.com/in/taiaokawiti/'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className='fa-brands fa-linkedin'></i>
          </motion.a>
          <motion.a
            href='https://github.com/flowtyf'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className='fa-brands fa-github'></i>
          </motion.a>
          <motion.a
            href='mailto:taiaokawiti@protonmail.com'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className='fa-solid fa-envelope'></i>
          </motion.a>
          <motion.a
            href='https://drive.google.com/file/d/1va-GCTMhwg_6vAmGu-SP0A97iOQlriCz/view'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className='fa-solid fa-file-pdf'></i>
          </motion.a>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
