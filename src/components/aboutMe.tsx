import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
/* const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
}; */
const AboutMe = () => (
  // const skillsFront = ['JavaScript', 'React', 'Redux', 'Angular'];
  // const skillsBack = ['NodeJS', 'Express', 'MongoDB', 'NestJs'];
  <div
    style={{ marginTop: '100px' }}
    className="row justify-content-center text-light "
    id="About"
  >
    <div className="col-md-9">
      <motion.h2
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="card-title"
        style={{
          fontFamily: 'Preahvihear',
          fontSize: '64px',
          marginBottom: '50px',
        }}
      >
        About Me
      </motion.h2>
      <div className="">
        <p
          className=" text-success"
          style={{ fontFamily: 'Preahvihear', fontSize: '18px' }}
        >
          Hi! My name is Mariana, I&apos;m glad you&apos;re here and I would
          like to tell you a little about myself. Full Stack Developer with over
          2 years of experience and a strong background in Flutter, Angular,
          ReactJs, MongoDB, Java, and Node.js. Familiar with RESTful APIs and
          experienced in developing cross-platform mobile applications with
          Flutter and process management web applications. Proficient in using
          Redux, Tailwind CSS, and JWT. What sets me apart is my ability to
          communicate effectively, solve problems efficiently, and quickly learn
          new technologies in constantly evolving work environments.
        </p>
      </div>
    </div>
  </div>
);
export default AboutMe;

/* import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const AboutMe = () => (
  // const skillsFront = ['JavaScript', 'React', 'Redux', 'Angular'];
  // const skillsBack = ['NodeJS', 'Express', 'MongoDB', 'NestJs'];
  <div className="text-light bg-primary mt-5" id="About">
    <div>
      <motion.h2
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="card-title fs-2 ms-4 mb-4"
        style={{ fontFamily: 'Playfair Display' }}
      >
        About Me
      </motion.h2>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text text-success" style={{ fontSize: '24px' }}>
              Hi! My name is Mariana, I&apos;m glad you&apos;re here and I would
              like to tell you a little about myself. By the year 2020 I begin
              to study Java, HTML, CSS, JavaScript then by the year 2021 I begin
              a bootcamp, here I learn React, Redux, NodeJS, MongoDB. I learned
              from this experience to work effectively in teams using the SCRUM
              methodology, have provided clean and efficient code using GIT to
              store their code. I am an intelligent person, with great capacity
              for teamwork and ready to face great challenges.
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
      </div>
    </div>
  </div>
);
export default AboutMe */
