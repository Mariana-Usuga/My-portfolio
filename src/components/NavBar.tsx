/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

// import './navBar.scss';

const NavBar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  // const handleClick = (e: SyntheticEvent) => {
  // console.log('working');
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mariana Usuga</a>
        {/* <button */}
        {/* // className="navbar-toggler border-light"
        // type="button"
        // data-bs-toggle="collapse"
        // data-bs-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        // aria-label="Toggle navigation" */}
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.8}
          size={24}
          data-bs-toggle="collapse"
        />
        {/* </button> */}
        {isOpen
          ? (
            // <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Experience</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active" aria-current="page" href="#">Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success" type="submit">Resume</button>
                </li>
              </ul>
            </div>
          )
          : null}
      </div>
    </nav>
  );
};

export default NavBar;
