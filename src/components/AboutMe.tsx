const AboutMe = () => {
  console.log('wor');
  return (
    <div
      className="card text-light center-aboutMe margin-top-aboutMe bg-primary boder-primary"
      style={{ maxWidth: '900px' }}
    >
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-text fs-6 text-success">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="d-flex">
            <div>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="https://res.cloudinary.com/db3njhxi0/image/upload/v1648329629/WhatsApp_Image_2022-03-03_at_3.53.49_PM_rnle6c.jpg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
