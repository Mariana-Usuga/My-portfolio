/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import WhereIveWorked from '../components/WhereIveWorked';
import OtherProject from '../components/OtherProject';
import GetInTouch from '../components/GetInTouch';
import SocialMedia from '../components/SocialMedia';
import Email from '../components/Email';
import StyledCredit from '../components/StyledCredit';
import Projects from '../components/Projects';
// import WorkPlace from '../components/WorkPlace';
// import Example from '../components/example';

const Portfolio = () => (
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
        <Projects />
        <OtherProject />
        <GetInTouch />
      </div>
      <div className="col-md-1 order-3 order-sm-3 order-md-3">
        <Email />
      </div>
    </div>
    <StyledCredit />
    {/* <Example /> */}
  </div>
);

export default Portfolio;
