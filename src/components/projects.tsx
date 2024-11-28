/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { motion } from 'framer-motion';
import './projects.scss';
import { FaGithub, FaEye } from 'react-icons/fa';
import { IoOpenSharp } from 'react-icons/io5';

const items = [
  {
    id: 1,
    title: 'Picking',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1732721377/market/picking_xi27mp.png',
    desc: `The application allows the warehouse manager to view their assignments and available products, 
    improving inventory management and control through barcode scanning. By streamlining the process of registering and updating inventories, 
    I ensured that the application is intuitive and easy to use, providing an optimized user experience.`,
    download:
      'https://drive.google.com/file/d/1SgzaTkNeOAqi-61IhYA5xdw4t4ck7ooK/view?usp=drive_link',
    tecs: ['Flutter', 'Cubit', 'JWT'],
    repository: 'http://20.169.252.83/santiago.perez/picking_flutter',
    eye: 'https://youtu.be/ONxs90EWJFY',
  },
  {
    id: 2,
    title: 'Teslo App',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1732736967/teslo3_tuw92g.png',
    desc: `A mobile eCommerce app for clothing, built with Flutter, Cubit, and JWT. Designed for administrators,
     it allows users to browse, create, edit products, register, and log in securely. Streamlines product
      management with a user-friendly interface and robust authentication.`,
    download:
      'https://drive.google.com/file/d/1Cxpw_8axuCya3rGWAKUYt6AbEUCyCNW9/view?usp=drive_link',
    tecs: ['Flutter', 'Cubit', 'JWT'],
    repository: 'https://github.com/Mariana-Usuga/teslo-app',
  },
  {
    id: 3,
    title: 'MarktPul',
    img: 'https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png',
    desc: `Worked on MarktPul, a web application where anyone can register, browse and search through the second-hand product offering that were previously 
    uploaded by other sellers . The buyer adds the products to a shopping cart and finally pays and receives home delivery.`,
    download: 'https://marktpulf.netlify.app/',
    tecs: ['React', 'TailWind', 'NodeJS', 'MongoDB'],
    repository: 'https://github.com/Mariana-Usuga/MarktPul-F',
  },
];

const Single = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
    tecs: Array<string>;
    download: string;
    repository: string;
    eye?: string;
  };
}) => (
  /* const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]); */
  <section>
    <div className="container" style={{ marginTop: '120px' }}>
      <div className="row g-2 justify-content-center " style={{}}>
        <div
          className={`col-md-5 position-relative  ${
            item.id % 2 === 0 ? 'order-md-2 card-right' : 'order-md-1 card-left'
          } `}
        >
          <img src={item.img} alt="" />
        </div>
        <motion.div
          className={`col-md-6  ${
            item.id % 2 === 0 ? 'order-md-1 ' : 'order-md-2 '
          }`}
        >
          <div
            className={` position-relative ${
              item.id % 2 === 0 ? 'card-left' : 'card-right'
            }`}
          >
            <div
              className=""
              style={{
                color: 'white',
              }}
            >
              <div
                className={`text-secondary ${
                  item.id % 2 === 0 ? 'ps-3' : 'pe-3'
                }`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'semibold',
                  textAlign: item.id % 2 === 0 ? 'left' : 'right',
                  // color:
                }}
              >
                Featured Project
              </div>
              <h1
                className={`fs-md-3 ${item.id % 2 === 0 ? 'ps-3' : 'pe-3'}`}
                style={{
                  fontSize: '34px',
                  fontWeight: 'semibold',
                  textAlign: item.id % 2 === 0 ? 'left' : 'right',
                }}
              >
                {item.title}
              </h1>
            </div>
            <div />
            <div
              className="position-relative"
              style={{
                color: 'white',
                backgroundColor: '#111827',
                fontSize: '18px',
                zIndex: 1,
              }}
            >
              <div
                className="position-relative p-3 rounded-2"
                style={{
                  zIndex: 2,
                  textAlign: 'justify',
                }}
              >
                {item.desc}
              </div>
              <div
                className="position-absolute rounded-2 top-50 start-50 translate-middle w-100 h-100 bg-primary"
                style={{
                  opacity: 0.5,
                  zIndex: 1,
                }}
              />
            </div>
            <div
              className={`row  ${
                item.id % 2 === 0
                  ? 'ps-3 justify-content-start'
                  : 'pe-3 justify-content-end'
              }`}
            >
              {item.tecs.map((tec) => (
                <div
                  className="col col-md-2"
                  style={{
                    color: 'white',
                    textAlign: item.id % 2 === 0 ? 'left' : 'right',
                    fontSize: '18px',
                  }}
                >
                  {tec}
                </div>
              ))}
            </div>
            <div
              style={{ fontSize: '30px' }}
              className={`row mt-3  ${
                item.id % 2 === 0
                  ? 'justify-content-start'
                  : 'justify-content-end'
              }`}
            >
              {item.eye ? (
                <a
                  href={item.eye}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-2"
                >
                  <FaEye
                    style={{
                      color: 'white',
                    }}
                  />
                </a>
              ) : (
                <div />
              )}
              <a
                href={item.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="col-2"
              >
                <FaGithub
                  style={{
                    color: 'white',
                  }}
                />
              </a>

              <a
                href={item.download}
                target="_blank"
                rel="noopener noreferrer"
                className="col-2"
              >
                <IoOpenSharp
                  style={{
                    color: 'white',
                  }}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <div className="portfolio" id="Work" style={{ fontFamily: 'Preahvihear' }}>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>
);

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
