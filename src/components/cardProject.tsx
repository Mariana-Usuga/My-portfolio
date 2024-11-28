/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { FaFolder, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  id?: number;
  title: string;
  description?: string;
  tecnologies: Array<string>;
  deployment: string;
  repository: string;
}
// col-4 rounded nose-4
// p-4 bg-info text-success rounded-
// style={{ width: '350px' }}
const CardProject: FC<Project> = ({
  title,
  children,
  tecnologies,
  deployment,
  repository,
}) => (
  <div className="col-md-4 mb-5" style={{ textAlign: 'justify' }}>
    <div
      className="text-success bg-info p-4 rounded-3 card h-100"
      style={{ height: '340px' }}
    >
      <div className="row mb-4">
        <div className="col-6">
          <FaFolder style={{ fontSize: '30px' }} />
        </div>
        <div className="col">
          <a
            href={repository}
            className="text-success"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ fontSize: '30px' }} />
          </a>
        </div>
        <div className="col">
          <a
            href={deployment}
            className="text-success"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink style={{ fontSize: '30px' }} />
          </a>
        </div>
      </div>
      <div className="fw-bold" style={{ fontSize: '24px' }}>
        {title}
      </div>
      <div className="mt-4" style={{ fontSize: '18px' }}>
        {children}
      </div>
      <ul
        className="row justify-content-start mt-4"
        style={{ listStyleType: 'none' }}
      >
        {tecnologies.map((tecnologie) => (
          <li className="col">{tecnologie}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CardProject;
