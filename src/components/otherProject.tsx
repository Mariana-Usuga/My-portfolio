/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// row g-3 justify-content-center

import CardProject from './cardProject';

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
        <CardProject
          title="Ecommerce_Component"
          tecnologies={['React', 'Redux', 'Sass']}
          deployment="https://adoring-easley-2c8944.netlify.app/"
          repository="https://github.com/Mariana-Usuga/Ecommerce_Component"
        >
          This is a shopping cart where the user can add the dishes he wants,
          when he adds a dish to his cart the total is automatically updated,
          the user can increase or decrease.
        </CardProject>
        <CardProject
          title="Todo list and Bank with TypeScript"
          tecnologies={['React', 'Bootstrap', 'Typecript']}
          deployment="https://first-typescript.netlify.app/"
          repository="https://github.com/Mariana-Usuga/first-steps-typescript"
        >
          This is a todo list where the user can add, delete and update,
          simulating a bank where the user can deposit, withdraw, withdraw all
          the money. All this using TypeScript
        </CardProject>
        <CardProject
          title="Voting System"
          tecnologies={['React', 'Context']}
          deployment="https://system-voting.netlify.app/"
          repository="https://github.com/Mariana-Usuga/Voting-system"
        >
          This is a voting system in which you can vote for candidate 1, 2, 3 or
          4. See voting results in percentage or numerical, see the total votes,
          This interface is made by creating a context.
        </CardProject>
      </div>
    </div>
  </>
);

export default OtherProject;
