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
        <div className='divider'></div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInLeft'
        animatePreScroll={false}
        animateOnce={true}
        duration={1}
        className='projects-container'
      >
        <ProjectCard
          name='BIONIC BOUTIQUE'
          image={require('./img/bionicboutique.webp')}
          image2={require('./img/bionicboutique2.webp')}
          image3={require('./img/bionicboutique3.webp')}
          liveUrl='https://taiao-react-online-shop.onrender.com/'
          description='Bionic Boutique is an online storefront that I built using React. I handled all aspects of the UI design and planning, and implemented integration with the Stripe API for secure payment processing. The shop allows customers to browse products, sort and filter products by category/date, and easily make purchases.'
        />
        <ProjectCard
          name='CHATBOT'
          image={require('./img/adventure-time-bmo.webp')}
          liveUrl='https://taiao-chatbot-project.onrender.com'
          repoUrl='https://github.com/flowtyf/DI-Chatbot-project'
          description='For this project I put together a chatbot that suggests video games based on personal tastes. I focused on making sure its conversations flow naturally, its responses make sense, and it has robust handling of edge cases.'
        />
        <ProjectCard
          name='JS CALCULATOR'
          image={require('./img/jscalc.webp')}
          description='A simple implementation of a calculator that performs basic arithmetic. It also supports decimal point calculations for more precise computations.The functional coding is done in JavaScript and it is styled with basic CSS. I also explored the addition of sound effects using DOM, adding a bit of fun and auditory feedback to the user experience.'
          repoUrl='https://github.com/flowtyf/JS-Calculator'
          liveUrl='https://flowtyf.github.io/JS-Calculator/'
        />
        <ProjectCard
          name='RESERVATIONIZER'
          image={require('./img/personalwebsite.png')}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend turpis vel pulvinar aliquam. Proin dictum diam eu lacus tempor, sed tempus nunc ullamcorper. Nunc sed fermentum nulla.'
        />
      </AnimationOnScroll>
      <div className='divider'></div>
    </div>
  );
}
