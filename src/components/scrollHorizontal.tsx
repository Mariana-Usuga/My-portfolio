/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Job {
  id?: number;
  title: string;
  items?: Array<string>;
  from?: string;
  to?: string;
}

const ScrollHorizontal: FC<Job> = ({ id, title }) => (
  <Link
    to={`/${id !== 3 ? id : ''}`}
    key={id}
    style={{ textDecoration: 'none' }}
    data-cy="profile"
    className="height-auto w-100"
  >
    <div className="nose text-center" style={{ fontFamily: 'Preahvihear' }}>
      <a
        className="nav-link
        border border-success border-start
         text-secondary border-0 border-start-4 text-left"
        style={{ fontSize: '22px' }}
        href={`#${title}`}
      >
        {title}
      </a>
    </div>
  </Link>
);

export default ScrollHorizontal;
