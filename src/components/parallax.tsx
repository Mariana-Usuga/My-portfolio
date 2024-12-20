import './parallax.scss';
import { useRef } from 'react';
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
      <motion.div
        style={{
          y: yText,
          color: 'white',
          fontFamily: 'Preahvihear',
          fontSize: '64px',
        }}
      >
        {type === 'services' ? "Where I've Worked" : "Some Things I've Built"}
      </motion.div>
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
