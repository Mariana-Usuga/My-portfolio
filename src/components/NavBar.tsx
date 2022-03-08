import React, { useState, FC } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import './navBar.scss';

const NavBar: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div>Mariana Usuga</div>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
      </div>
      <div className="navbar__collapse">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="navbar-link" href="#portfolio">About</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#skillset">Experince</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#contact">Work</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#contact">Contact</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#contact">Resume</a>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
