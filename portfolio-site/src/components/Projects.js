import ProjectCard from './Project';
import './Projects.css';

export default function Projects() {
  return (
    <div className='projects-section'>
      <h2>PROJECTS</h2>
      <ProjectCard
        name='REACT ONLINE SHOP'
        image={require('./img/bionicboutique.png')}
        description='An ecommerce site built with react and Stripe API'
      />
      <ProjectCard
        name='CHATBOT'
        image={require('./img/chatbot.png')}
        description='yes'
      />
      <ProjectCard
        name='THIS WEBSITE!'
        image={require('./img/personalwebsite.png')}
        description='yes'
      />
    </div>
  );
}
