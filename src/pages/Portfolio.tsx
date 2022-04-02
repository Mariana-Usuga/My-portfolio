/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar';
import Main from '../components/Main';
// import SocialMedia from '../components/SocialMedia';
// import Email from '../components/Email';
import AboutMe from '../components/AboutMe';
import WhereIveWorked from '../components/WhereIveWorked';
import IveBuilt from '../components/IveBuilt';
import OtherProject from '../components/OtherProject';

const Portfolio = () => {
  console.log('working');
  return (
    <>
      <NavBar />
      {/* <div className="d-flex"> */}
      {/* <SocialMedia /> */}
      <Main />
      {/* <Email /> */}
      {/* </div> */}
      <AboutMe />
      <WhereIveWorked />
      <IveBuilt />
      <div className="container">
        <div className="row">
          {/* <div className="col-4"> */}
          <OtherProject title="Integrating Algolia Search with WordPress Multisite">
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </OtherProject>
          {/* </div> */}
          {/* <div className="col-4"> */}
          <OtherProject title="Integrating Algolia Search with WordPress Multisite">
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </OtherProject>
          {/* </div> */}
          {/* <div className="col-4"> */}
          <OtherProject title="Integrating Algolia Search with WordPress Multisite">
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </OtherProject>
          {/* </div> */}
          {/* <div className="col-4"> */}
          <OtherProject title="Integrating Algolia Search with WordPress Multisite">
            Building a custom multisite compatible WordPress plugin to build global
            search with Algolia
          </OtherProject>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
