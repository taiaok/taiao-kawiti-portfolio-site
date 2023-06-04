import ProjectCard from './Project';
import './Projects.css';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className='projects-section' id='projects'>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animatePreScroll={false}
        animateOnce={true}
        duration={2}
        offset={100}
      >
        <h2 className='projects-title'>PROJECTS</h2>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInLeft'
        animatePreScroll={false}
        animateOnce={true}
        duration={1}
      >
        <div className='projects-container'>
          <ProjectCard
            name='REACT ONLINE SHOP'
            modalName='REACT ONLINE SHOP (BIONIC BOUTIQUE)'
            image={require('./img/bionicboutique.png')}
            description='Bionic Boutique is a sleek and modern online shop built using React.  I handled all aspects of the UI design and planning, and implemented integration with the Stripe API for secure payment processing. The shop allows customers to browse products, sort and filter products by category/date, and easily make purchases.'
          />
          <ProjectCard
            name='CHATBOT'
            image={require('./img/adventure-time-bmo.webp')}
            description='yes'
          />

          <ProjectCard
            name='JS CALCULATOR'
            image={require('./img/jscalc.webp')}
            description='yes'
          />

          <ProjectCard
            name='PLACEHOLDER PROJECT'
            image={require('./img/personalwebsite.png')}
            description='yes'
          />
        </div>
      </AnimationOnScroll>
      <div className='divider'></div>
    </div>
  );
}
