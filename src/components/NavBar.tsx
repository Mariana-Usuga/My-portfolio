/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC /* useState */ } from 'react';
import { FaAlignRight, FaTimes } from 'react-icons/fa';

// import './navBar.scss';

const NavBar: FC = () => {
  // const [isOpen, setOpen] = useState(false);
  // const handleClick = (e: SyntheticEvent) => {
  console.log('working');
  // };
  //  navbar-light
  // navbar navbar-expand-lg bg-primary
  return (
    <nav className="navbar navbar-expand-lg pt-4 ps-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Mariana</a>
        <button
          className="navbar-toggler text-secondary border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <FaAlignRight style={{ fontSize: '35px' }} />
        </button>
        <div className="offcanvas offcanvas-end bg-primary text-light" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasNavbarLabel"
              style={{ opacity: 0 }}
            >
              Mariana
            </h5>
            <button
              type="button"
              className="btn-close text-reset text-light pe-4"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ color: 'white' }}
            >
              <FaTimes style={{ fontSize: '30px' }} />
            </button>
          </div>
          <div className="offcanvas-body text-font-family-navbar
           text-center fw-bold"
          >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-light">
              <li className="nav-item p-4">
                <a className="nav-link active text-light">About</a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link active text-light">Experience</a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link active text-light">Work</a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link active text-light">Contact</a>
              </li>
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
    // <nav className="navbar navbar-expand-lg bg-primary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand text-light px-4" href="#">Mariana</a>
    //     <button
    //       className="navbar-toggler text-secondary"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //
    //     </button>
    //     <div
    //       className="collapse navbar-collapse text-font-family-navbar
    //        text-center fw-bold bg-primary"
    //       id="navbarSupportedContent"
    //     >
    //       <ul
    //         className="navbar-nav me-auto mb-2 mb-lg-0"
    //         // className={!isOpen ? 'panel-btn__ul navbar-nav ml-auto mb-2 mb-lg-0'
    //         //   : 'panel-btn__ul--show'}
    //       >
    //         <li className="nav-item bg-primary border-primary">
    //           <a
    //             className="nav-link active text-light p-4"
    //             aria-current="page"
    //             href="#"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item bg-primary">
    //           <a
    //             className="nav-link active text-light p-4"
    //             aria-current="page"
    //             href="#"
    //           >
    //             Experience
    //           </a>
    //         </li>
    //         <li className="nav-item bg-primary">
    //           <a
    //             className="nav-link active text-light p-4"
    //             aria-current="page"
    //             href="#"
    //           >
    //             Work
    //           </a>
    //         </li>
    //         <li className="nav-item bg-primary">
    //           <a
    //             className="nav-link active text-light p-4"
    //             aria-current="page"
    //             href="#"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li className="nav-item bg-primary">
    //           <button
    //             className="btn btn-outline-secondary fw-bold mt-3"
    //             type="button"
    //           >
    //             Resume
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
