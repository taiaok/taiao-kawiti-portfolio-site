import './Project.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function ProjectCard({ image, name, repourl, liveurl }) {
  return (
    <Card className='project-card'>
      <Card.Img variant='top' src={image} className='project-image' />
      <Card.Title>{name}</Card.Title>
    </Card>
  );
}

export default ProjectCard;
