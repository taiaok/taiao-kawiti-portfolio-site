import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
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
            image={require('./img/bionicboutique.webp')}
            image2={require('./img/bionicboutique2.webp')}
            image3={require('./img/bionicboutique3.webp')}
            liveUrl='https://taiao-react-online-shop.onrender.com/'
            description='Bionic Boutique is a sleek and modern online shop built using React.  I handled all aspects of the UI design and planning, and implemented integration with the Stripe API for secure payment processing. The shop allows customers to browse products, sort and filter products by category/date, and easily make purchases.'
          />
          <ProjectCard
            name='CHATBOT'
            image={require('./img/adventure-time-bmo.webp')}
            description='This project was a part of my studies, where I created a chatbot that offers personalized video game recommendations. I designed the chatbots flow, reply logic, and handled edge cases to ensure a seamless user experience.  '
          />

          <ProjectCard
            name='JS CALCULATOR'
            image={require('./img/jscalc.webp')}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend turpis vel pulvinar aliquam. Proin dictum diam eu lacus tempor, sed tempus nunc ullamcorper. Nunc sed fermentum nulla.'
          />

          <ProjectCard
            name='PLACEHOLDER PROJECT'
            image={require('./img/personalwebsite.png')}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend turpis vel pulvinar aliquam. Proin dictum diam eu lacus tempor, sed tempus nunc ullamcorper. Nunc sed fermentum nulla.'
          />
        </div>
      </AnimationOnScroll>
      <div className='divider'></div>
    </div>
  );
}
