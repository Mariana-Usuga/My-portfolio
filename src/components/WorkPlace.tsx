/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';

// interface CardProps {
//   job: object
// }

interface Job {
  id?:number
  title:string
  items: Array<string>
  from?:string
  to?:string
}

const WorkPlace: FC<Job> = ({ title, items }) => {
  console.log('working');
  return (
    <div className="card-body" id={title}>
      <h5 className="card-title fs-2">{title}</h5>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* <p className="card-text fs-5 text-success">
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </p> */}
    </div>
  );
};

export default WorkPlace;
