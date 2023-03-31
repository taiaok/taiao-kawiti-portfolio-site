export default function NavBar() {
  return (
    <div className='navbar'>
      <h1 className='title'>TAIAO KAWITI</h1>
      <div className='navbar-links'>
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
