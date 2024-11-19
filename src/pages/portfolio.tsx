/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/navBar';
import Main from '../components/main';
import AboutMe from '../components/aboutMe';
import Parallax from '../components/parallax';
import WhereIveWorked from '../components/whereIveWorked';
import Projects from '../components/projects';
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
    <Projects />
    {/* <OtherProject />
      <GetInTouch />
      <div className="col-md-1 order-3 order-sm-3 order-md-3">
        <Email />
      </div> */}

    {/* <StyledCredit />
     <Example /> */}
  </div>
);

export default Portfolio;
