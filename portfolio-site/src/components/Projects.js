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
      >
        <div className='projects-container'>
          <ProjectCard
            name='REACT ONLINE SHOP'
            modalName='REACT ONLINE SHOP (BIONIC BOUTIQUE)'
            image={require('./img/bionicboutique.webp')}
            image2={require('./img/bionicboutique2.webp')}
            image3={require('./img/bionicboutique3.webp')}
            liveUrl='https://taiao-react-online-shop.onrender.com/'
            description='Bionic Boutique is a contemporary, visually pleasing online storefront that I built using React.I handled all aspects of the UI design and planning, and implemented integration with the Stripe API for secure payment processing. The shop allows customers to browse products, sort and filter products by category/date, and easily make purchases.'
          />
          <ProjectCard
            name='CHATBOT'
            image={require('./img/adventure-time-bmo.webp')}
            liveUrl='https://taiao-chatbot-project.onrender.com'
            description='During my current studies, for a project I put together a chatbot that suggests video games based on personal tastes. I focused on making sure its conversations flow naturally, its responses make sense, and it can handle any unusual situations to give users a hassle-free experience.'
          />

          <ProjectCard
            name='JS CALCULATOR'
            image={require('./img/jscalc.webp')}
            description='A straightforward and simple project that performs basic arithmetic: multiplication, subtraction, division, and addition. It also supports decimal point calculations for more precise computations.The functional coding is done in JavaScript, with CSS used for its visual style. I also explored the addition of sound effects using DOM, adding a bit of fun and auditory feedback to the user experience.'
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
