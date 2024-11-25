import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        marginTop: '100px',
      }}
    >
      <motion.h1
        style={{ y: yText, color: 'white', fontFamily: 'Preahvihear' }}
      >
        {type === 'services' ? "Where I've Worked" : "Some Things I've Built"}
      </motion.h1>
      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === 'services' ? '/planets.png' : '/sun.png'
          })`,
        }}
      />
      <motion.div style={{ x: yBg }} className="stars" />
      <motion.div className="stars" />
    </div>
  );
};

export default Parallax;
