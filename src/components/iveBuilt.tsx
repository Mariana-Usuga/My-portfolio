/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  id?: number;
  title: string;
  description?: string;
  tecnologies: Array<string>;
  repository?: string;
  deployment?: string;
}
const IveBuilt: FC<Project> = ({
  title,
  children,
  tecnologies,
  deployment,
  repository,
}) => (
  <div className="main-proje">
    {title === 'Maket Pul' ? (
      <div className="img-built">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png"
          alt=""
        />
      </div>
    ) : null}
    <div className={`${title === 'Maket Pul' ? 'descr' : 'descr2'}`}>
      <div
        className={`${title === 'U Dance' ? null : 'text-sm-end'}`}
        style={{ width: '90%' }}
      >
        <h4 className="fs-6 text-font-family-navbar btn-outline-secondary fw-bold">
          Featured Project
        </h4>
        <h5 className="fs-3">{title}</h5>
      </div>
      <p
        className={`rounded p-sm-3 prr ${
          title === 'U Dance' ? null : 'text-sm-end'
        }`}
      >
        {children}
      </p>
      <ul
        className={`d-flex me-5
          ${title === 'U Dance' ? null : 'justify-content-sm-end'}`}
        style={{
          listStyleType: 'none',
          // width: '90%',
        }}
      >
        {tecnologies.map((tecnologie) => (
          <li className="me-3 text-font-family-navbar fw-bold fs-0">
            {tecnologie}
          </li>
        ))}
      </ul>
      <ul
        className={`d-flex  ${
          title === 'U Dance' ? null : 'justify-content-sm-end'
        }`}
        style={{
          listStyleType: 'none',
          // width: '90%',
        }}
      >
        <li className="col-2 me-3">
          <a
            href={repository}
            target="_blank"
            style={{ color: 'white' }}
            rel="noreferrer"
          >
            <FaGithub style={{ fontSize: '30px' }} />
          </a>
        </li>
        <li className="col-2 me-3">
          <a
            href={deployment}
            target="_blank"
            style={{ color: 'white' }}
            rel="noreferrer"
          >
            <FiExternalLink style={{ fontSize: '30px' }} />
          </a>
        </li>
      </ul>
    </div>
    {title === 'U Dance' ? (
      <div className="img-built2">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1648778391/project1_ljyr81.png"
          alt=""
        />
      </div>
    ) : null}
  </div>
  // </div>
);

export default IveBuilt;
{
  /* <div
      // className="center-aboutMe
      // margin-top-aboutMe bg-primary boder-primary mx-3"
      // id="Work"
    // >
    //   <h5 className="card-title fs-2 mb-4 text-light ps-2 mb-3">
    //     Some Things Ive Built
    //   </h5>
    //   <div
    //     className="text-success row g-0"
    //     style={{
    //     // backgroundColor: 'yellow',
    //     // width: '400px',
    //       marginBottom: '100px',
    //     }}
    //   >
    //     <div className="col-md-6">
    //       <img
    //         className="img_project1"
    //         // style={{ width: '0' }}
    //         src="https://res.cloudinary.com/db3njhxi0/image/upload/v164
    5838858/jnbkpsaqgk60yslhiko6.jpg"
    //         alt=""
    //       />
    //     </div>
    //     <div
    //       className="card-body col-md-6 text-left project1"
    //       style={{ color: '#a8b2d1' }}
    //     >
    //       {/* <div className="project1_background"> */
}
//       <p>Featured Project</p>
//       <h5 className="card-title">Maket Pul</h5>
//       <p className="card-text">
//         A minimal, dark blue theme for VS Code, Sublime Text,
//         Atom, iTerm, and more. Available on
//       </p>
//       <ul className="d-flex flex-wrap" style={{ listStyleType: 'none' }}>
//         <li className="p-2 bd-highlight">VS Code</li>
//         <li className="p-2 bd-highlight">React</li>
//         <li className="p-2 bd-highlight">NodeJS</li>
//         <li className="p-2 bd-highlight">Express</li>
//         <li className="p-2 bd-highlight">SASS</li>
//       </ul>
//       <div>
//         <a href="git">git</a>
//         <a href="abrir">abrir</a>
//       </div>
//     </div>

//   </div>
// </div> */}
// </div>
