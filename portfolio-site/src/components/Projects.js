import ProjectCard from './Project';
import './Projects.css';

export default function Projects() {
  return (
    <div className='projects-section'>
      <h2>PROJECTS</h2>
      <ProjectCard
        name='React Online Shop'
        liveurl='https://taiao-react-online-shop.onrender.com/'
        repourl=''
        image={require('./img/bionicboutique.png')}
      />
      <ProjectCard
        name='JS Chatbot'
        url='https://taiao-chatbot-project.onrender.com/'
        image={require('./img/chatbot.png')}
      />
      <ProjectCard
        name='This website!'
        url='https://github.com/flowtyf/taiao-kawiti-portfolio-site'
        image={require('./img/personalwebsite.png')}
      />
    </div>
  );
}
