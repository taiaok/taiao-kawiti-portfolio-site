import { useState } from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';


function ProjectCard({ image, name, description }) {
  const [isHovered, setHovered] = useState(false);
  const className = isHovered ? 'blur' : '';

  return (
    <Card className='project-card'>
      <Card.Img
        variant='top'
        src={image}
        className={className}
        alt='card image'
      />
      <Card.ImgOverlay
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Fade in={isHovered}>
          <Card.Text>{name}</Card.Text>
        </Fade>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
