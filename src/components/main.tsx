import '../styles/style.css';
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
const Main = () => (
  <div className="row justify-content-center" style={{ marginTop: '80px' }}>
    <div className="text-light mx-md-5 mx-4 col-md-5">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="fontF"
        style={{ fontFamily: 'Preahvihear', fontSize: '18px' }}
      >
        Full Stack Developer
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="card-title text-light fw-bold"
        style={{ fontFamily: 'Preahvihear', fontSize: '64px' }}
      >
        Hello, my name is Mariana Usuga
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className=" text-success text-success"
        style={{
          fontFamily: 'Preahvihear',
          maxWidth: '540px',
          fontSize: '18px',
        }}
      >
        React and NodeJS developer building excellent user experiences with the
        MERN stack. I bring well-tested and clean code to the companies and have
        worked effectively with distributed/remote teams.
      </motion.div>
      <div>
        <motion.button
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="btn btn-outline-secondary mt-2"
          type="button"
          style={{
            fontFamily: 'Preahvihear',
            fontSize: '18px',
          }}
        >
          <a
            href="mailto:marianausugamontoya12344@gmail.com"
            className=" text-success"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </motion.button>
      </div>
    </div>
    <div className="col-md-4 ">
      <img
        src="/foto.png"
        className="img-fluid rounded "
        style={{
          width: '340px',
          top: '-60px',
        }}
        alt="..."
      />
    </div>
  </div>
);

export default Main;
