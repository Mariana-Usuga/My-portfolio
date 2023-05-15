/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

interface Job {
  id?:number
  title:string
  items: Array<string>
  from?:string
  to?:string
}

const WorkPlace: FC<Job> = ({ title, items }) => (
  <div className="card-body" id={title}>
    <h5 className="card-title fs-2">{title}</h5>
    <ul style={{ listStyleType: 'none' }}>
      {items.map((item) => (
        <div className="d-flex">
          <FaStar className="me-2 fs-5 text-secondary" />
          <li className="mb-2 fs-5 text-success">
            {item}
          </li>
        </div>
      ))}
    </ul>
  </div>
);

export default WorkPlace;
