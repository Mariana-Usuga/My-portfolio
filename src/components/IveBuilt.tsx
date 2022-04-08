/* eslint-disable jsx-a11y/anchor-is-valid */
const IveBuilt = () => {
  console.log('working');
  return (
    <div
      className="center-aboutMe
      margin-top-aboutMe bg-primary boder-primary mx-3"
      id="Work"
    >
      <h5 className="card-title fs-2 mb-4 text-light ps-2 mb-3">
        Some Things Ive Built
      </h5>
      <div
        className="text-success row g-0"
        style={{
        // backgroundColor: 'yellow',
        // width: '400px',
          marginBottom: '100px',
        }}
      >
        <div className="col-md-6">
          <img
            className="img_project1"
            // style={{ width: '0' }}
            src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645838858/jnbkpsaqgk60yslhiko6.jpg"
            alt=""
          />
        </div>
        <div
          className="card-body col-md-6 text-left project1"
          style={{ color: '#a8b2d1' }}
        >
          {/* <div className="project1_background"> */}
          <p>Featured Project</p>
          <h5 className="card-title">Maket Pul</h5>
          <p className="card-text">
            A minimal, dark blue theme for VS Code, Sublime Text,
            Atom, iTerm, and more. Available on
          </p>
          <ul className="d-flex flex-wrap" style={{ listStyleType: 'none' }}>
            <li className="p-2 bd-highlight">VS Code</li>
            <li className="p-2 bd-highlight">React</li>
            <li className="p-2 bd-highlight">NodeJS</li>
            <li className="p-2 bd-highlight">Express</li>
            <li className="p-2 bd-highlight">SASS</li>
          </ul>
          <div>
            <a href="git">git</a>
            <a href="abrir">abrir</a>
          </div>
        </div>

      </div>
    </div>
  // </div>
  );
};

export default IveBuilt;
