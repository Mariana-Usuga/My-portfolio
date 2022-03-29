/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { FaAlignRight, FaTimes } from 'react-icons/fa';

const NavBar: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const items = ['About', 'Experiencie', 'Work', 'Contact'];

  return (
    <nav className="navbar navbar-expand-lg pt-4 ps-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Mariana</a>
        <button type="button" className="hideBars bg-primary text-secondary border-0">
          {!isOpen ? (
            <FaAlignRight style={{ fontSize: '35px' }} onClick={() => setOpen(true)} />
          ) : (
            <FaTimes style={{ fontSize: '30px' }} onClick={() => setOpen(false)} />
          ) }
        </button>
        <div
          className={!isOpen ? 'offcanvas offcanvas-end hide'
            : 'show'}
          // id="offcanvasNavbar"
          // aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="text-font-family-navbar text-center bg-primary offcanvas-body">
            <ul
              className="navbar-nav justify-content-end flex-grow-1 pe-3 text-light"
            >
              {items.map((item) => (
                <li className="nav-item p-4">
                  <a
                    className="nav-link active text-light"
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item p-4">
                <button
                  className="btn btn-outline-secondary fw-bold"
                  type="button"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
