import { FaStar } from 'react-icons/fa';

const AboutMe = () => {
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
              Hi! My name is Mariana, I&apos;m glad you&apos;re here and I would like
              to tell you a little about myself. By the year 2020 I begin to study
              Java, HTML, CSS, JavaScript then by the year 2021 I begin a bootcamp, here
              I learn React, Redux, NodeJS, MongoDB. I learned from this experience to work
              effectively in teams using the SCRUM methodology, have provided clean and
              efficient code using GIT to store their code. I am an intelligent person,
              with great capacity for teamwork and ready to face great challenges.
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
