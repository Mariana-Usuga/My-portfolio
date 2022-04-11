/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

import CardProject from './CardProject';

const OtherProject = () => {
  console.log('worki');
  return (
    <>
      <h5 className="card-title fs-2 mb-5 text-light text-center margin-top-aboutMe">
        Other Projects
      </h5>
      <div
        className="container"
      >
        <div className="row g-3 justify-content-center">
          <CardProject
            title="Integrating Algolia Search with WordPress Multisite"
            tecnologies={['React', 'Node']}
          >
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </CardProject>
          <CardProject
            title="Integrating Algolia Search with WordPress Multisite"
            tecnologies={['React', 'Node']}
          >
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </CardProject>
          <CardProject
            title="Integrating Algolia Search with WordPress Multisite"
            tecnologies={['React', 'Node']}
          >
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </CardProject>
          <CardProject
            title="Integrating Algolia Search with WordPress Multisite"
            tecnologies={['React', 'Node']}
          >
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </CardProject>
        </div>
      </div>
    </>
  );
};

export default OtherProject;
