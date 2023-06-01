import { useState } from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

function ProjectCard({ image, name, description }) {
  const [fade, setFade] = useState(false);

  return (
    <Card className='project-card'>
      <Card.Img
        variant='top'
        src={image}
        className='project-image'
        alt='card image'
      />
      <Card.ImgOverlay
        onMouseEnter={() => setFade(true)}
        onMouseLeave={() => setFade(false)}
      >
        <Fade in={fade}>
          <Card.Text>{name}</Card.Text>
        </Fade>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
