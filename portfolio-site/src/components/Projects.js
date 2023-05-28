import Project from './Project';
import './Projects.css';

export default function Projects() {
  return (
    <div className='projects-section'>
      <Project
        name='React Online Shop'
        url='https://taiao-react-online-shop.onrender.com/'
        image={require('./img/bionicboutique.png')}
      />
      <Project
        name='JS Chatbot'
        url='https://taiao-chatbot-project.onrender.com/'
        image={require('./img/chatbot.png')}
      />
      <Project
        name='This website!'
        url='https://github.com/flowtyf/taiao-kawiti-portfolio-site'
        image={require('./img/personalwebsite.png')}
      />
    </div>
  );
}
