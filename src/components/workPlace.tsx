/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

interface Job {
  id?: number;
  title: string;
  items: Array<string>;
  from?: string;
  to?: string;
}

const WorkPlace: FC<Job> = ({ title, items }) => (
  <div
    className="card-body"
    id={title}
    style={{
      fontFamily: 'Preahvihear',
    }}
  >
    <h5 className="card-title" style={{ fontSize: '34px' }}>
      {title}
    </h5>
    <ul style={{ listStyleType: 'none' }}>
      {items.map((item) => (
        <div className="d-flex">
          <FaStar className="me-2 fs-5 text-secondary" />
          <div className="mb-2  text-success" style={{ fontSize: '18px' }}>
            {item}
          </div>
        </div>
      ))}
    </ul>
  </div>
);

export default WorkPlace;
