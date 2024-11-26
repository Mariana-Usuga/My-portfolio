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
  id?: number;
  title: string;
  // eslint-disable-next-line react/require-default-props
  items?: Array<string>;
  from: string;
  to: string;
}

const LayoutWorkPlace = () => {
  // eslint-disable-next-line no-unused-vars
  const [jobChoose, setJobChoose] = useState<Job[]>([
    {
      id: 4,
      title: 'Dms Software',
      from: 'January - 2023',
      to: 'April - 2023',
    },
    {
      id: 3,
      title: 'Sofka Technologies',
      from: 'January - 2023',
      to: 'April - 2023',
    },
    {
      id: 2,
      title: 'It Team Corp',
      from: 'June - 2022',
      to: 'January -2023',
    },
    {
      id: 1,
      title: 'Make It Real',
      from: 'August - 2021',
      to: 'February - 2022',
    },
  ]);

  return (
    <div
      className="text-light center-aboutMe boder-primary d-flex align-items-center"
      style={{ maxWidth: '900px', marginTop: '15%', marginBottom: '15%' }}
      id="Experiencie"
    >
      <div className="items text-success d-md-block col-md-4 row overflow-hidden">
        {jobChoose.map((job) => (
          <div>
            <ScrollHorizontal id={job.id} title={job.title} />
          </div>
        ))}
      </div>
      <div className="col-md-8">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWorkPlace;
