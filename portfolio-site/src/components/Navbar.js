export default function NavBar() {
  return (
    <div className='navbar'>
      <h1 className='page-heading'>Taiao Kawiti</h1>
      <nav>
        <a
          href='https://www.linkedin.com/in/taiaokawiti/'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            <i class='fa-brands fa-linkedin'></i>
          </p>
        </a>
        <a href='https://github.com/flowtyf' target='_blank' rel='noreferrer'>
          <p>
            <i class='fa-brands fa-github'></i>
          </p>
        </a>
        <a
          href='mailto:taiaokawiti@protonmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <p>
            <i class='fa-solid fa-envelope'></i>
          </p>
        </a>
        <a href='' target='_blank' rel='noreferrer'>
          <p>
            <i class='fa-solid fa-file-pdf'></i>
          </p>
        </a>
      </nav>
    </div>
  );
}
