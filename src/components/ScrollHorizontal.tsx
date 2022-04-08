/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

// interface CardProps {
//   job: string
// }

interface Job {
  id?:number
  title:string
  items: Array<string>
  from?:string
  to?:string
}

const ScrollHorizontal: FC<Job> = ({ title }) => {
  console.log('working');

  return (
    <div className="nose text-center scrollh">
      <a
      // btn btn-outline-secondary
        className="nav-link
        border border-success border-start
         text-light border-0 border-start-4 text-left"
        style={{ fontSize: '.75rem' }}
        // style={{ backgroundColor: 'red' }}
        href={`#${title}`}
      >
        {title}
      </a>
    </div>
  );
};

export default ScrollHorizontal;
