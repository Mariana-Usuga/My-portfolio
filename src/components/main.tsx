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
  <div className="text-light mx-md-5 mx-4">
    <motion.h2
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="card-title text-light fs-1 fw-bold"
      style={{ fontFamily: 'Playfair Display', fontSize: '1px' }}
    >
      Mariana Usuga.
    </motion.h2>
    <motion.p
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="fs-5 text-success text-success text-font-family-main"
      style={{ maxWidth: '540px' }}
    >
      React and NodeJS developer building excellent user experiences with the
      MERN stack. I bring well-tested and clean code to the companies and have
      worked effectively with distributed/remote teams.
    </motion.p>
    <div>
      <motion.button
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="btn btn-outline-secondary mx-5"
        type="button"
      >
        <a
          href="mailto:marianausugamontoya12344@gmail.com"
          className=" text-success"
          target="_blank"
          rel="noreferrer"
        >
          Get In Touch
        </a>
      </motion.button>
    </div>
  </div>
);

export default Main;
