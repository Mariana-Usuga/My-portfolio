/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { motion, useScroll, useSpring } from 'framer-motion';
import './projects.scss';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
];

const Single = ({
  item,
}: {
  item: { id: number; title: string; img: string; desc: string };
}) => (
  /* const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]); */

  <div
    className="row justify-content-center"
    style={{ marginTop: '100px', width: '100%', position: 'relative' }}
  >
    <motion.div className="col-md-5 opacity-25">
      <img src={item.img} alt="" />
    </motion.div>
    <motion.div className="col-md-5">
      <div className="" style={{ width: '90%', color: 'white' }}>
        <h4
          className=" btn-outline-secondary "
          style={{
            fontSize: '16px',
            fontWeight: 'semibold',
          }}
        >
          Featured Project
        </h4>
        <h5
          className="align-right"
          style={{
            fontSize: '34px',
            fontWeight: 'semibold',
          }}
        >
          {item.title}
        </h5>
      </div>
      <div
        className="opacity-100 opacity-25 p-3 blur-container"
        style={{
          color: 'white',
          fontSize: '18px',
          position: 'absolute',
          right: '150px',
          width: '44%',
        }}
      >
        {item.desc}
      </div>
    </motion.div>
  </div>
  /* <section ref={ref}>
      <div className="container">
        <div className="imageContainer">
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button type="button">See Demo</button>
        </motion.div>
      </div>
    </section> */
);
const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progres">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
/* import { motion, useScroll, useSpring } from 'framer-motion';
import '../styles/style.css';
import { useRef } from 'react';
import IveBuilt from './iveBuilt';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  // center-aboutMe div-main margin-top-aboutMe
  return (
    <div
      ref={ref}
      className="text-light  portfolio"
      id="Work"
      style={{
        fontFamily: 'Preahvihear',
        fontSize: '22px',
        marginTop: '100px',
      }}
    >
      <div className="progress">
        <h5 className="fs-2 title-thing">Some Things I&apos;ve Built</h5>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      <IveBuilt
        title="Maket Pul"
        tecnologies={['React', 'Sass', 'NodeJS', 'MongoDB']}
        deployment="https://marktpulf.netlify.app/"
        repository="https://github.com/Mariana-Usuga/MarktPul-F"
      >
        Worked on MarktPul, a web application where anyone can register, browse
        and search through the second-hand product offering that were previously
        uploaded by other sellers . The buyer adds the products to a shopping
        cart and finally pays and receives home delivery
      </IveBuilt>
      <IveBuilt
        title="U Dance"
        tecnologies={['React', 'TailWind', 'NodeJS', 'MongoDB']}
        deployment="https://u-dance.netlify.app/"
        repository="https://github.com/Mariana-Usuga/U-Dance-F"
      >
        Wrote a web application for management of group classes for any kind of
        school, initially developed for dance schools. The app has two profiles:
        a director&apos;s role, which can have a profile to create and manage
        dance courses, and a student&apos;s role, to select courses and pay
        them.
      </IveBuilt>
      <IveBuilt
        title="U Dance"
        tecnologies={['React', 'TailWind', 'NodeJS', 'MongoDB']}
        deployment="https://u-dance.netlify.app/"
        repository="https://github.com/Mariana-Usuga/U-Dance-F"
      >
        Wrote a web application for management of group classes for any kind of
        school, initially developed for dance schools. The app has two profiles:
        a director&apos;s role, which can have a profile to create and manage
        dance courses, and a student&apos;s role, to select courses and pay
        them.
      </IveBuilt>
    </div>
  );
}; */

export default Projects;
