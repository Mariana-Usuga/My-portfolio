/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import ScrollHorizontal from './ScrollHorizontal';
import WorkPlace from './WorkPlace';

interface Job {
  id?:number
  title:string
  items: Array<string>
  from?:string
  to?:string
}

const WhereIveWorked = () => {
  console.log('working');
  // const jobs = ['Make It Real', 'Otro Lugar', 'Otro Lugar2',
  //   'Otro Lugar3', 'Otro Lugar4', 'Otro Lugar5'];

  // eslint-disable-next-line no-unused-vars
  const [jobChoose, setJobChoose] = useState<Job[]>([{
    title: 'Make It Real',
    items: ['This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'],
    from: 'August 2021',
    to: 'Feb 2022',
  },
  {
    title: 'Otro Lugar',
    items: ['mariana mariana mariana mariana mariana marianamariana mariana mariana mariana ',
      'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'],
    from: 'August 2021',
    to: 'Feb 2022',
  }]);

  const [jobName, setName] = useState<Job>({
    title: 'Make It Real',
    items: ['This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.'],
  });

  return (
    <div
      className="card text-light center-aboutMe margin-top-aboutMe bg-primary boder-primary"
      style={{ maxWidth: '900px' }}
      id="About"
    >
      <div className="row g-0">
        <div className="col-md-4">
          <div className="items text-success d-md-block">
            {jobChoose.map((job) => (
              <div onClick={() => setName(job)}>
                <ScrollHorizontal title={job.title} items={job.items} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <WorkPlace title={jobName.title} items={jobName.items} />
        </div>
      </div>
    </div>
  );
};

export default WhereIveWorked;
