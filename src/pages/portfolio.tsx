/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/navBar';
import Main from '../components/main';
import AboutMe from '../components/aboutMe';
import Parallax from '../components/parallax';
import WhereIveWorked from '../components/whereIveWorked';
import Projects from '../components/projects';
import OtherProject from '../components/otherProject';
import GetInTouch from '../components/getInTouch';
import StyledCredit from '../components/styledCredit';
// import WorkPlace from '../components/WorkPlace';
// import Example from '../components/example';

const Portfolio = () => (
  <div className="container-fluid">
    {/* <div className="col-md-1 order-2 order-sm-2 order-md-1">
        <SocialMedia />
      </div> */}

    <NavBar />
    <Main />
    <AboutMe />
    <Parallax type="services" />
    <WhereIveWorked />
    <Parallax type="projects" />
    <Projects />
    <OtherProject />
    <GetInTouch />
    <StyledCredit />

    {/* <div className="col-md-1 order-3 order-sm-3 order-md-3">
        <Email />
      </div>

     <Example /> */}
  </div>
);

export default Portfolio;
