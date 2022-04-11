import { FaStar } from 'react-icons/fa';

const AboutMe = () => {
  console.log('wor');
  const skillsFront = ['JavaScript', 'React', 'Redux'];
  const skillsBack = ['NodeJS', 'Express', 'MongoDB'];

  return (
    <div
      className=" text-light center-aboutMe margin-top-aboutMe bg-primary"
      style={{ maxWidth: '900px' }}
      id="About"
    >
      <h5 className="card-title fs-2 ms-4 mb-4">About Me</h5>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text fs-5 text-success">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="d-flex text-success">
            <div>
              <ul style={{ listStyleType: 'none' }}>
                {skillsFront.map((skill) => (
                  <li>
                    <FaStar className="me-2 text-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul style={{ listStyleType: 'none' }}>
                {skillsBack.map((skill) => (
                  <li>
                    <FaStar className="me-2 fs-0 text-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="https://res.cloudinary.com/db3njhxi0/image/upload/v1648329629/WhatsApp_Image_2022-03-03_at_3.53.49_PM_rnle6c.jpg"
            className="img-fluid rounded"
            style={{ width: '200px' }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
