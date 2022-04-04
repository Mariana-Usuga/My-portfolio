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
}

const OtherProject: FC<Project> = ({ title, children }) => {
  console.log('worki');
  return (
    // col-md-6 col-lg-4
    <div className="col-4" style={{ width: '350px' }}>
      <div className="">
        {/* <div className=""> */}
        <div className="p-4 bg-info text-success ">
          <ul className="d-flex">
            <li><FaFolder /></li>
            <li><FaGithub /></li>
            <li><FiExternalLink /></li>
          </ul>
          <h5 className="">{title}</h5>
          <h6 className=" mb-2 text-muted">Card subtitle</h6>
          <p className="">{children}</p>
          {/* <a href="#" className="card-link">Card link</a> */}
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default OtherProject;
