import ProjectCard from './Project';
import './Projects.css';

export default function Projects() {
  return (
    <div className='projects-section' id='projects'>
      <h2 className='projects-title'>PROJECTS</h2>
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
    </div>
  );
}
