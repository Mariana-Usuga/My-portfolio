/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// row g-3 justify-content-center

import CardProject from './cardProject';

const items = [
  {
    id: 1,
    title: 'Blog Portal',
    desc: `A blog CRUD application that allows users to create accounts, log in securely, write and publish blog posts, 
    view a list of all blogs, and add comments to individual posts. This platform provides a simple yet interactive 
    way to manage and share content.`,
    tecs: ['Angular', 'NodeJS', 'MongoDB'],
    deployment: 'https://capable-bonbon-808f69.netlify.app/',
    repository: 'https://github.com/Mariana-Usuga/blogPortal-Frontend',
  },
  {
    id: 2,
    title: 'MoodTracker',
    desc: `I created a small project with OpenAI where users select their daily mood, 
    They can add comments and receive a diagnostic based on their mood. The "Trends" section includes a calendar showing moods for each day and a graph of 
    the user's emotional trends over time. Google authentication is used for login.`,
    deployment: 'https://benevolent-melomakarona-0966a6.netlify.app/',
    tecs: ['React', 'Firebase', 'Google Authenticator'],
    repository:
      'https://github.com/Mariana-Usuga/sentiment-analyzer-and-mood-tracker',
  },
  {
    id: 3,
    title: 'System Voting',
    desc: `Project that's a voting system with four candidates. Users can vote for their preferred candidate and view the results, 
    either individually or as a total. The results are displayed both numerically and as percentages.`,
    deployment: 'https://system-voting.netlify.app/',
    tecs: ['React'],
    repository: 'https://github.com/Mariana-Usuga/Voting-system',
  },
  {
    id: 4,
    title: 'Value Manager',
    desc: 'A small app designed to increment, decrement, reset a value, and add it to a list.',
    deployment: 'https://candid-kangaroo-6fd276.netlify.app/',
    tecs: ['Vue'],
    repository: 'https://github.com/Mariana-Usuga/mi-primer-vue',
  },
];

const OtherProject = () => (
  <>
    <div
      className="card-title mb-5 text-light text-center margin-top-aboutMe"
      style={{ fontSize: '34px', fontFamily: 'Preahvihear' }}
    >
      Other Projects
    </div>
    <div className="container" style={{ fontFamily: 'Preahvihear' }}>
      <div className="row gx-4 gx-lg-5">
        {items.map((item) => (
          <CardProject
            title={item.title}
            tecnologies={item.tecs}
            deployment={item.deployment}
            repository={item.repository}
          >
            {item.desc}
          </CardProject>
        ))}
      </div>
    </div>
  </>
);

export default OtherProject;
