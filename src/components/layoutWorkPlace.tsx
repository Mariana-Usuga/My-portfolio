/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { FC, useState } from 'react';
import ScrollHorizontal from './scrollHorizontal';
import WorkPlace from './workPlace';
import 'alpinejs';
import { Outlet } from 'react-router-dom';

interface Job {
  // eslint-disable-next-line react/require-default-props
  id?:number
  title:string
  // eslint-disable-next-line react/require-default-props
  items?: Array<string>
  from:string
  to:string
}

const LayoutWorkPlace: FC<Job> = ({ title, from, to }) => {
  // eslint-disable-next-line no-unused-vars
  const [jobChoose, setJobChoose] = useState<Job[]>([{
    id: 1,
    title,
    from,
    to,
  }]);

  return (
    <div
      className="text-light center-aboutMe margin-top-aboutMe bg-primary boder-primary"
      style={{ maxWidth: '900px' }}
      id="Experiencie"
    >
      <div className="row g-0">
        <h5 className="card-title fs-2 mb-5">
          Where I've Worked
        </h5>
        <div className="col-md-4">
          <div className="items text-success d-md-block">
            {jobChoose.map((job) => (
              <div>
                <ScrollHorizontal id={job.id} title={job.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutWorkPlace;
