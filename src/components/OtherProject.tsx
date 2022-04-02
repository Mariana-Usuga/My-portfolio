/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

interface Project {
  id?:number
  title:string
  description?: string
}

const OtherProject: FC<Project> = ({ title, children }) => {
  console.log('worki');
  return (
    <div className="col d-flex justify-content-center">
      <div className="p-3 border bg-light">
        <div className="card" style={{ width: '20rem' }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">{children}</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProject;
