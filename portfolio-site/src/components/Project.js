import { useState } from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

function ProjectCard({ image, name, description }) {
  const [isHovered, setHovered] = useState(false);
  const blurClass = isHovered ? 'blur' : '';
  const shadowClass = isHovered ? 'shadow' : '';

  return (
    <Card className={`project-card ${shadowClass}`}>
      <Card.Img
        variant='top'
        src={image}
        className={blurClass}
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
