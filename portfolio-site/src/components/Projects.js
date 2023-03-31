import Project from './Project';

export default function Projects() {
  return (
    <div className='projects-section'>
      <Project
        name='React Online Shop'
        url='https://taiao-react-online-shop.onrender.com/'
        image='./img/bionicboutique.png'
      />
      <Project
        name='JS Chatbot'
        url='https://taiao-chatbot-project.onrender.com/'
      />
      <Project
        name='This website!'
        url='https://github.com/flowtyf/taiao-kawiti-portfolio-site'
      />
    </div>
  );
}
