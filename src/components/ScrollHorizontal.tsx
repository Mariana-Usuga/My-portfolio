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
    <div className="nose text-center ">
      <a
        className="nav-link btn btn-outline-secondary border-0 text-light"
        // style={{ backgroundColor: 'red' }}
        href={`#${title}`}
      >
        {title}
      </a>
    </div>
  );
};

export default ScrollHorizontal;
