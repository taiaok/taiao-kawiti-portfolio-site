import './Project.css';

export default function Project({ image, name, url }) {
  return (
    <div className='project-card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='image-wrap'>
          <img className='project-image' src={image} alt={name} />
        </div>
        <div className='project-name-wrap'>
          <h3 className='project-name'>{name}</h3>
        </div>
      </a>
    </div>
  );
}
