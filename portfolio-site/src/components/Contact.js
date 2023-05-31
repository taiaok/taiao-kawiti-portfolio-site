export default function Contact() {
  return (
    <div className='contact-section'>
        <h2>CONTACT</h2>
      <div className='social-links'>
        <a
          href='https://www.linkedin.com/in/taiaokawiti/'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            <i className='fa-brands fa-linkedin'></i>
          </p>
        </a>
        <a href='https://github.com/flowtyf' target='_blank' rel='noreferrer'>
          <p>
            <i className='fa-brands fa-github'></i>
          </p>
        </a>
        <a
          href='mailto:taiaokawiti@protonmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            <i className='fa-solid fa-envelope'></i>
          </p>
        </a>
        <a
          href='https://drive.google.com/file/d/1va-GCTMhwg_6vAmGu-SP0A97iOQlriCz/view'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            <i className='fa-solid fa-file-pdf'></i>
          </p>
        </a>
      </div>
    </div>
  );
}
