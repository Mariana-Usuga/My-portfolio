/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import ScrollHorizontal from './ScrollHorizontal';
import WorkPlace from './WorkPlace';
import 'alpinejs';
import { Outlet } from 'react-router-dom';

interface Job {
  id?:number
  title:string
  items?: Array<string>
  from?:string
  to?:string
}

const LayoutWorkPlace = () => {
  // eslint-disable-next-line no-unused-vars
  const [jobChoose, setJobChoose] = useState<Job[]>([{
    id: 1,
    title: 'Make It Real',
    from: 'August 2021',
    to: 'Feb 2022',
  },
  {
    id: 2,
    title: 'Otro Lugar',
    items: ['mariana mariana mariana mariana mariana marianamariana mariana mariana mariana ',
      'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'],
    from: 'August 2021',
    to: 'Feb 2022',
  }]);

  return (
    <div
      className="text-light center-aboutMe margin-top-aboutMe bg-primary boder-primary"
      style={{ maxWidth: '900px' }}
      id="Experiencie"
    >
      <div className="row g-0">
        <h5 className="card-title fs-2 mb-4" style={{ marginLeft: '100px' }}>
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
