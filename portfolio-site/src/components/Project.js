export default function Project({ image, name, url }) {
  return (
    <div className='project-card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img className='product-image' src={image} alt={name} />
        <div className='project-name-wrap'>
          <h3 className='project-name'>{name}</h3>
        </div>
      </a>
    </div>
  );
}
