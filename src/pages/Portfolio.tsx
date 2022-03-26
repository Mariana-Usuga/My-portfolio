/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import SocialMedia from '../components/SocialMedia';
import Email from '../components/Email';
import AboutMe from '../components/AboutMe';

const Portfolio = () => {
  console.log('working');
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <SocialMedia />
        <Main />
        <Email />
      </div>
      <AboutMe />

    </>
  );
};

export default Portfolio;
