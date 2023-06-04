import { useState } from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import { Modal, Button, Carousel, CarouselItem } from 'react-bootstrap';

function ProjectCard({
  image,
  image2,
  image3,
  name,
  modalName,
  description,
  repoUrl,
  liveUrl,
}) {
  const [isHovered, setHovered] = useState(false);
  const blurClass = isHovered ? 'blur' : '';
  const shadowClass = isHovered ? 'shadow' : '';
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

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
        onMouseDown={() => handleOpenModal(name)}
      >
        <Fade in={isHovered}>
          <Card.Text>{name}</Card.Text>
        </Fade>
      </Card.ImgOverlay>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size='lg'
        fullscreen='xxl-down'
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
          <Carousel className='project-carousel' fade>
            <CarouselItem>
              <img className='carousel-item-img' src={image} alt='project carousel 1' />
            </CarouselItem>
            <CarouselItem>
              <img className='carousel-item-img' src={image2} alt='project carousel 2' />
            </CarouselItem>
            <CarouselItem>
              <img className='carousel-item-img' src={image3} alt='project carousel 3' />
            </CarouselItem>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button href={liveUrl} target='_blank' className='modal-btn'>
            Live Demo
          </Button>
          <Button className='modal-btn'>Github Repo</Button>
          <Button onClick={handleCloseModal} className='modal-btn'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ProjectCard;
