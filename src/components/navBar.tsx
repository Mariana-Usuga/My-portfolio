/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { FaAlignRight, FaTimes } from 'react-icons/fa';

const NavBar: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const items = ['About', 'Experiencie', 'Work', 'Contact'];

  return (
    <nav className="navbar navbar-expand-lg pt-4 ps-3">
      <div className="container-fluid">
        <div className="navbar-brand text-light text-font-family-navbar" />
        <button
          type="button"
          className="hideBars text-secondary"
          style={{
            backgroundColor: '#1A0B2E',
            border: 'none',
          }}
        >
          {!isOpen ? (
            <FaAlignRight
              style={{ fontSize: '30px' }}
              onClick={() => setOpen(true)}
            />
          ) : (
            <FaTimes
              style={{ fontSize: '30px' }}
              onClick={() => setOpen(false)}
            />
          )}
        </button>
        <div className={!isOpen ? 'offcanvas offcanvas-end hide' : 'row show'}>
          <div className="col-5" />
          <div className="col text-font-family-navbar text-center offcanvas-body ">
            <ul
              className="navbar-nav  justify-content-end flex-grow-1 pe-3 text-light fw-semibold "
              style={{ backgroundColor: '#1A0B2E' }}
            >
              {items.map((item) => (
                <li className="nav-item p-4">
                  <a
                    className="nav-link active text-light"
                    href={`#${item}`}
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 'SemiBold',
                      fontSize: '18px',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item p-4 fs-4" style={{ fontSize: '18px' }}>
                <button className="btn btn-outline-secondary " type="button">
                  <a
                    href="../public/Mariana-Usuga-(12).pdf"
                    className="text-light"
                    download
                  >
                    Resume
                  </a>
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
