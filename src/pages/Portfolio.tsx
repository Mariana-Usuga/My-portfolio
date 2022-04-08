/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import WhereIveWorked from '../components/WhereIveWorked';
import IveBuilt from '../components/IveBuilt';
import OtherProject from '../components/OtherProject';
import GetInTouch from '../components/GetInTouch';
import SocialMedia from '../components/SocialMedia';
import Email from '../components/Email';
import StyledCredit from '../components/StyledCredit';

const Portfolio = () => {
  console.log('working');
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 order-2 order-sm-2 order-md-1">
          <SocialMedia />
        </div>
        <div className="col-md-10 order-1 order-sm-1 order-md-2">
          <NavBar />
          <Main />
          <AboutMe />
          <WhereIveWorked />
          <IveBuilt />
          <h5 className="card-title fs-2 mb-5 text-light text-center margin-top-aboutMe">
            Some Things Ive Built
          </h5>
          <div
            className="container"
            style={{ backgroundColor: 'yellow' }}
          >
            <div className="row g-3 justify-content-center">
              <OtherProject
                title="Integrating Algolia Search with WordPress Multisite"
                tecnologies={['React', 'Node']}
              >
                Building a custom multisite compatible WordPress plugin to build global
                search with Algolia
              </OtherProject>
              <OtherProject
                title="Integrating Algolia Search with WordPress Multisite"
                tecnologies={['React', 'Node']}
              >
                Building a custom multisite compatible WordPress plugin to build global
                search with Algolia
              </OtherProject>
              <OtherProject
                title="Integrating Algolia Search with WordPress Multisite"
                tecnologies={['React', 'Node']}
              >
                Building a custom multisite compatible WordPress plugin to build global
                search with Algolia
              </OtherProject>
              <OtherProject
                title="Integrating Algolia Search with WordPress Multisite"
                tecnologies={['React', 'Node']}
              >
                Building a custom multisite compatible WordPress plugin to build global
                search with Algolia
              </OtherProject>
            </div>
          </div>
          <GetInTouch />
        </div>
        <div className="col-md-1 order-3 order-sm-3 order-md-3">
          <Email />
        </div>
      </div>
      <StyledCredit />
    </div>
  );
};

export default Portfolio;
