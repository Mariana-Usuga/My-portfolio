/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { FaFolder, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  id?:number
  title:string
  description?: string
  tecnologies:Array<string>
}

const OtherProject: FC<Project> = ({ title, children, tecnologies }) => {
  console.log('worki');
  return (
    <div
      className="col-4 rounded nose-4"
      style={{ width: '350px' }}
    >
      <div className="p-4 bg-info text-success rounded-3">
        <div
          className="row mb-4"
        >
          <div className="col-6">
            <FaFolder style={{ fontSize: '30px' }} />
          </div>
          <div className="col">
            <FaGithub style={{ fontSize: '20px' }} />
          </div>
          <div className="col">
            <FiExternalLink style={{ fontSize: '20px' }} />
          </div>
        </div>
        <h5 className="">{title}</h5>
        <p className="">{children}</p>
        <ul className="d-flex mt-1 mb-0" style={{ listStyleType: 'none' }}>
          {tecnologies.map((tecnologie) => (
            <li className="me-3 text-font-family-navbar fw-bold fs-0">
              {tecnologie}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherProject;
