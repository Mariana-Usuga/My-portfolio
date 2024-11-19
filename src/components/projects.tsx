/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './projects.scss';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
];

const Single = ({
  item,
}: {
  item: { id: number; title: string; img: string; desc: string };
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="main-proje" ref={ref}>
      <div className="img-built">
        <img src={item.img} alt="" />
      </div>

      <motion.div className="" style={{ y }}>
        <div className="" style={{ width: '90%' }}>
          <h4 className="fs-6 text-font-family-navbar btn-outline-secondary fw-bold">
            Featured Project
          </h4>
          <h5 className="fs-3">{item.title}</h5>
        </div>
        <p className="">{item.desc}</p>
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
};
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
