/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

// import './navBar.scss';

const NavBar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  // const handleClick = (e: SyntheticEvent) => {
  console.log('working');
  // };
  //  navbar-light
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light bg-primary" href="#">Mariana Usuga</a>
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={0.8}
            size={24}
          />
        </button>
        <div
          className="collapse navbar-collapse text-font-family text-center fw-bold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light p-4"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light p-4"
                aria-current="page"
                href="#"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light p-4"
                aria-current="page"
                href="#"
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light p-4"
                aria-current="page"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-secondary fw-bold mt-3"
                type="button"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
