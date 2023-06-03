import ProjectCard from './Project';
import './Projects.css';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Projects() {
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
      <div className='projects-container'>
        <AnimationOnScroll
          animateIn='animate__fadeInLeft'
          animatePreScroll={false}
          animateOnce={true}
          duration={1}
        >
          <ProjectCard
            name='ONLINE SHOP'
            image={require('./img/bionicboutique.png')}
            description='An ecommerce site built with react and Stripe API'
          />
          <ProjectCard
            name='CHATBOT'
            image={require('./img/adventure-time-bmo.webp')}
            description='yes'
          />

          <ProjectCard
            name='PORTFOLIO SITE'
            image={require('./img/personalwebsite.png')}
            description='yes'
          />

          <ProjectCard
            name='PLACEHOLDER PROJECT'
            image={require('./img/personalwebsite.png')}
            description='yes'
          />
        </AnimationOnScroll>
      </div>

      <div className='divider'></div>
    </div>
  );
}
